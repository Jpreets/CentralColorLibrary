/**
 * color-grid-detail.model.ts
 * 
 * This file contains the properties for color grid on dashboard screen 
 */

/**
 * The color-grid-details model
 */
export class ColorGridDetail{
    public reflectance : string[];
    public wavelength : number[];
    public colorValue : ColorValue;
    public lastModifiedDate : Date;
    public creationdDate : Date;
}

/**
 * The color-values model
 */
export class ColorValue{
   public a : string;
    public b : string;
    public c : string;
    public l : string;
    public h : string; 
}

/**
 * The color-measurement-condition model
 */
export class ColorMeasurementCondition{
    public absoluteDensity : string;
    public illuminant : string;
    observableAngle : string;
}