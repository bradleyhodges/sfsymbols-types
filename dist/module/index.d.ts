import React from "react";
/** Original icon geometry and paint attributes, exposed read-only to path callbacks. */
export type SFIconPath = Readonly<IconDefinition["svgPathData"][number]>;
/** Validated keyword metadata. Legacy string dictionaries supply only text. */
export interface SFIconKeyword {
    readonly text: string;
    readonly generic?: boolean;
    readonly priority?: number;
}
/** Per-path presentation and event props; geometry and child ownership stay with SFIcon. */
export type SFIconPathProps = Omit<React.SVGProps<SVGPathElement>, "d" | "key" | "ref" | "children" | "dangerouslySetInnerHTML">;
/**
 * Represents the definition of an icon for use in @bradleyhodges/sfsymbols.
 */
export interface IconDefinition {
    /**
     * The name of the icon.
     */
    iconName: string;
    /**
     * The source name of the icon.
     */
    sourceName: string;
    /**
     * The family to which the icon belongs.
     * Can be null if the icon does not belong to any family.
     */
    family: string | null;
    /**
     * The style of the icon.
     * Can be null if the icon does not have a specific style.
     */
    style: string | null;
    /**
     * The width of the icon.
     */
    width?: React.SVGProps<SVGSVGElement>["width"];
    /**
     * The height of the icon.
     */
    height?: React.SVGProps<SVGSVGElement>["height"];
    /**
     * The accessible title to be rendered on the icon in the SVG element.
     */
    description?: string;
    /**
     * The viewBox attribute of the icon's SVG.
     */
    viewBox: string;
    /**
     * The categories to which the icon belongs.
     */
    categories: string[];
    /**
     * The SVG path data for the icon.
     * Each path data object contains the 'd' attribute for the path,
     * the optional 'fill' color, and an optional 'fillOpacity'.
     */
    svgPathData: Array<{
        d: string;
        fill?: string;
        fillOpacity?: number;
    }>;
    /**
     * An optional ID for the title element in the SVG element. Overrides the automatically generated title ID.
     */
    titleId?: string;
    /**
     * An optional ID for the description element in the SVG element. Overrides the automatically generated description ID.
     */
    descriptionId?: string;
    /**
     * Additional SVG content rendered before paths.
     */
    svgChildren?: React.ReactNode;
    /**
     * Whether to preserve source path opacity with weight; explicit fillOpacity still takes precedence.
     */
    preservePathOpacity?: boolean;
    /**
     * The available variants of the icon.
     * Each key is a variant name, and the value is the icon name of the variant.
     *
     * @example
     * {
     *     "_": "sfCircle",
     *     "fill": "sfCircleFill",
     *     "circle": "sfCircle",
     *     "slash": "sfCircleSlash",
     *     "counterclockwise": "sfCircleCounterclockwise",
     *     "clockwise": "sfCircleClockwise"
     * }
     */
    variants: {
        [key in SFIconVariant]?: string;
    } | null | {};
    /**
     * Optional keywords to assist in searching and indexing of the icon.
     */
    keywords: {
        [key: string]: string;
    } | null | {};
    /**
     * Explicit path overrides, applied after color and opacity. Original geometry is immutable.
     */
    pathProps?: SFIconPathProps | ((path: SFIconPath, index: number) => SFIconPathProps);
}
export type SFIconVariant = "fill" | "circle" | "slash" | "counterclockwise" | "clockwise" | "square" | "outline" | "_";
/**
 * Props for the SFIcon component in @bradleyhodges/sfsymbols-react.
 *
 * @typedef {Object} SFIconProps
 *
 * @property {IconDefinition} icon - The icon definition to be used.
 * @property {string} [color] - Optional color for the icon.
 * @property {string} [className] - Optional CSS class name for the icon.
 * @property {number | null} [weight] - Optional weight for the icon, can be null. Defaults to null.
 * @property {number | null} [fillOpacity] - Optional fill opacity for the icon, can be null. Defaults to null.
 * @property {number | null} [size] - Optional size for the icon, can be null. Defaults to null.
 * @property {string} [title] - Optional title for the icon.
 * @property {string} [aria-label] - Optional aria label for the icon.
 *
 * This type also includes all properties from `React.SVGProps<SVGSVGElement>` as optional.
 */
export interface SFIconProps extends Omit<React.SVGProps<SVGSVGElement>, "ref" | "color" | "width" | "height" | "fillOpacity"> {
    /**
     * The @bradleyhodges/sfsymbols icon to be rendered.
     */
    icon: IconDefinition;
    /**
     * The color of the icon.
     * @default 'currentColor'
     */
    color?: React.CSSProperties["color"];
    /**
     * Weight (pixels) of the stroke to add to the icon.
     */
    weight?: number | null;
    /**
     * Optional fill opacity for the icon.
     */
    fillOpacity?: string | number | null;
    /**
     * Sets the visual size (width and height) of the icon in pixels.
     * @default 24
     */
    size?: number | string | null;
    /**
     * The accessible title to be rendered on the icon in the SVG element.
     */
    title?: string;
    /**
     * The accessible aria label for the icon.
     */
    "aria-label"?: string;
}
