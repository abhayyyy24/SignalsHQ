"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: LucideIcon;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      const willOpen = !prev[id];
      newState[id] = willOpen;

      if (willOpen) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => (newPulseEffect[relId] = true));
        setPulseEffect(newPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval>;
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.25) % 360).toFixed(3)));
      }, 50);
    }
    return () => clearInterval(rotationTimer);
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = typeof window !== "undefined" && window.innerWidth < 640 ? 110 : 200;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-accent-foreground bg-accent-light border-accent-light";
      case "in-progress":
        return "text-accent-light bg-accent-muted border-accent/40";
      default:
        return "text-muted bg-surface-hover border-border";
    }
  };

  return (
    <div
      className="relative flex h-[640px] w-full items-center justify-center overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative flex h-full w-full max-w-4xl items-center justify-center">
        <div
          className="absolute flex h-full w-full items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Center pulse node */}
          <div className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent-light">
            <div className="absolute h-20 w-20 animate-ping rounded-full border border-accent-light/30 opacity-70" />
            <div
              className="absolute h-24 w-24 animate-ping rounded-full border border-accent-light/15 opacity-50"
              style={{ animationDelay: "0.5s" }}
            />
            <div className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-md" />
          </div>

          <div className="absolute h-56 w-56 rounded-full border border-border sm:h-96 sm:w-96" />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute cursor-pointer transition-all duration-700"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
  className={`absolute -inset-1 rounded-full opacity-100 ${isPulsing ? "animate-pulse duration-1000 opacity-80" : ""}`}
  style={{
    background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)",
    width: `${item.energy * 0.25 + 32}px`,
    height: `${item.energy * 0.25 + 32}px`,
    left: `-${(item.energy * 0.25 + 32 - 40) / 2}px`,
    top: `-${(item.energy * 0.25 + 32 - 40) / 2}px`,
  }}
/>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isExpanded
                      ? "scale-150 border-accent-light bg-accent-light text-accent-foreground shadow-lg shadow-accent/30"
                      : isRelated
                      ? "animate-pulse border-accent-light bg-accent-muted text-accent-light"
                      : "border-border bg-surface text-foreground"
                  }`}
                >
                  <Icon size={16} />
                </div>

                <div
                  className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${
                    isExpanded ? "scale-125 text-foreground" : "text-muted"
                  }`}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute left-1/2 top-20 w-64 -translate-x-1/2 overflow-visible border-border bg-surface/95 shadow-xl shadow-accent/10 backdrop-blur-lg">
                    <div className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2 bg-border" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Badge className={`px-2 text-xs ${getStatusStyles(item.status)}`}>
                          {item.status === "completed"
                            ? "ACTIVE"
                            : item.status === "in-progress"
                            ? "ROLLING OUT"
                            : "PLANNED"}
                        </Badge>
                        <span className="font-mono text-xs text-muted">{item.date}</span>
                      </div>
                      <CardTitle className="mt-2 text-sm text-foreground">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted">
                      <p>{item.content}</p>

                      <div className="mt-4 border-t border-border pt-3">
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="flex items-center text-muted">
                            <Zap size={10} className="mr-1 text-accent-light" />
                            Coverage
                          </span>
                          <span className="font-mono text-foreground">{item.energy}%</span>
                        </div>
                        <div className="h-1 w-full overflow-hidden rounded-full bg-surface-hover">
                          <div
                            className="h-full bg-accent-light"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 border-t border-border pt-3">
                          <div className="mb-2 flex items-center">
                            <LinkIcon size={10} className="mr-1 text-accent-light" />
                            <h4 className="text-xs font-medium uppercase tracking-wider text-muted">
                              Connected
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex h-6 items-center rounded-md border-border bg-transparent px-2 py-0 text-xs text-muted hover:bg-surface-hover hover:text-foreground"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}