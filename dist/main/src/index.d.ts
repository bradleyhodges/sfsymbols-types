import React from "react";
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
    width: number;
    /**
     * The height of the icon.
     */
    height: number;
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
    icon: IconDefinition;
    color?: React.CSSProperties["color"];
    weight?: number | null;
    fillOpacity?: string | number | null;
    size?: number | string | null;
    title?: string;
    "aria-label"?: string;
}
