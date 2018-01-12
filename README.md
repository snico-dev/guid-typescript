# Guid Typescript

Guid Typescript is library that let you generate guid code

## Instalation and usage
### Instalation

```
npm i guid-typescript --save
```

### Basic usage

```
import { Guid } from "guid-typescript";

export class Exemple {
    public id: Guid;
    constructor() {
        this.id = Guid.create(); ==> b77d409a-10cd-4a47-8e94-b0cd0ab50aa1
    }
}
```

## Props and Methods

| Method/Prop | Desc | Test | Status |
|---|---|---|---|
| static isGuid (guid: any): boolean | check if value is a guid code | OK | Ready |
| static create ( ): Guid | create a new guid | OK | Ready |
| static createEmpty ( ): Guid | create a guid empty | OK | Ready |
| static parse (guid: string): Guid | given a guid code in string format, so create a guid instance  | OK | Ready |
| static raw ( ): string | create a guid code in string format  | OK | Ready |
| equals (other: Guid): boolean | compare a guid code | OK | Ready |
| isEmpty ( ): boolean | validate if a guid is empty  | OK | Ready |
| toString ( ): string | parse a guid instance to string format  | OK | Ready |
| toJSON ( ): any | parse to json format  | OK | Ready |


