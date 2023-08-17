export interface ColorModeIconProps extends React.ComponentProps<"svg"> {
  selected: boolean;
}
export const ColorModeIconHooksParams = (selected: boolean) => {
  return selected
    ? { light: "#1e40af", dark: "#2563eb" }
    : { light: "#475569", dark: "#cbd5e1" };
};
