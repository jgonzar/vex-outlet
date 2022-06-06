export interface Product{
  id:number;
  img:string;
  name:string;
  price:number;
  prevprice:number;
  discount:number;
  category?:string;
};

// import { Price } from '../models/price.model';
// export interface Product{
//   articleCodes:string[];
//   articleColorNames:string[];
//   articles: any[];
//   brandName: string;
//   categories:[];
//   categoryName: string;
//   code: string;
//   comingSoon: boolean;
//   defaultArticle: {code:string, name:string, images:string[], pk:string, sellingAttributes: string[]}
//   dummy: boolean;
//   ecoTaxValue:number;
//   images:[];
//   linkPdp: string;
//   mainCategoryCode: string;
//   markers: [];
//   name: string;
//   numbersOfPieces: number;
//   pk: string;
//   price:Price;
//   redirectToPdp: boolean;
//   rgbColors: number[];
//   sale: boolean;
//   searchEngineProductId: string;
//   sellingAttributes: [string];
//   showPriceMarker: boolean;
//   stock: {stockLevel: number};
//   swatches: [];
//   swatchesTotal: number;
//   ticket:string;
//   variantSizes: (number)[]
//   visible: boolean;
//   whitePrice: {currencyIso: string, value: number, priceType: string, formattedValue: string, type: string}
//   }


