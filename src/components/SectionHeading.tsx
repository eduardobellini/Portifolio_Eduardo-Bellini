import type { ReactNode } from "react";

type Props = { index: string; kicker: string; title: ReactNode; description?: string; dark?: boolean };

export default function SectionHeading({ index, kicker, title, description, dark = false }: Props) {
  return (
    <div className={`section-heading ${dark ? "section-heading-dark" : ""}`}>
      <div><p className="section-label"><span>{index}</span>{kicker}</p><h2>{title}</h2></div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
