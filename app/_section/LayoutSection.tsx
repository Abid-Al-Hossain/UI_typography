import React from "react";
import {
  type TypographyState,
  type TextAlign,
  type TypographyUpdater,
} from "../types";
import { SectionCard as Section } from "@/components/shared/layout/SectionCard";
import { LabeledField as ControlGroup } from "@/components/shared/layout/LabeledField";
import SelectControl from "@/components/shared/input/Select";

type Props = {
  state: TypographyState;
  update: TypographyUpdater;
};

const ALIGN_OPTIONS: { label: string; value: TextAlign }[] = [
  { label: "Left", value: "left" },
  { label: "Center", value: "center" },
  { label: "Right", value: "right" },
  { label: "Justify", value: "justify" },
];

export default function LayoutSection({ state, update }: Props) {
  return (
    <div className="space-y-6">
      <Section title="Layout" subtitle="Alignment and overall composition.">
        <ControlGroup label="Text Align">
          <SelectControl
            value={state.textAlign}
            options={ALIGN_OPTIONS}
            onChange={(value) => update("textAlign", value as TextAlign)}
          />
        </ControlGroup>
      </Section>
    </div>
  );
}
