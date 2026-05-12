import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { details, radarOrder, radarValues, type DetailKey } from "@/data/card-details";

interface Props {
  onSelect: (key: DetailKey) => void;
}

const data = radarOrder.map((key) => ({
  key,
  subject: details[key].title.split(" — ")[0],
  value: radarValues[key],
}));

export function RadarStats({ onSelect }: Props) {
  return (
    <div className="relative h-full min-h-[180px] w-full">
      <ResponsiveContainer>
        <RadarChart data={data} outerRadius="60%">
          <PolarGrid stroke="rgba(15,76,86,0.35)" />
          <PolarAngleAxis
            dataKey="subject"
            tick={(props) => {
              const { x, y, payload, textAnchor } = props;
              const item = data.find((d) => d.subject === payload.value);
              return (
                <text
                  x={x}
                  y={y}
                  textAnchor={textAnchor}
                  fill="#ffffff"
                  fontSize={13}
                  fontWeight={700}
                  className="cursor-pointer hover:fill-[var(--itau-orange)]"
                  onClick={(e) => {
                    e.stopPropagation();
                    item && onSelect(item.key as DetailKey);
                  }}
                >
                  {payload.value}
                </text>
              );
            }}
          />
          <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="#f59e0b"
            fill="#fbbf24"
            fillOpacity={0.45}
            strokeWidth={2}
            dot={(props: { cx: number; cy: number; index: number }) => {
              const { cx, cy, index } = props;
              const key = data[index]?.key as DetailKey | undefined;
              return (
                <circle
                  key={`dot-${index}`}
                  cx={cx}
                  cy={cy}
                  r={6}
                  fill="#ea580c"
                  stroke="#fff"
                  strokeWidth={2}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    key && onSelect(key);
                  }}
                />
              );
            }}
            activeDot={{ r: 8 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
