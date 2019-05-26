# Guid Typescript

Guid Typescript is a library that lets you generate guid code

## Installation and usage
### Installation

```
npm i guid-typescript --save
```

### Basic usage

```typescript
import { Guid } from "guid-typescript";

export class Example {
    public id: Guid;
    constructor() {
        this.id = Guid.create(); // ==> b77d409a-10cd-4a47-8e94-b0cd0ab50aa1
    }
}
```

## Props and Methods

| Method/Prop | Description | Test | Status |
|---|---|---|---|
| static isGuid (guid: any): boolean | Check if value is a guid code | OK | Ready |
| static create ( ): Guid | Create a new guid | OK | Ready |
| static createEmpty ( ): Guid | Create an empty guid | OK | Ready |
| static parse (guid: string): Guid | Creates a guid instance from a given guid as string  | OK | Ready |
| static raw ( ): string | Create a guid code in string format  | OK | Ready |
| equals (other: Guid): boolean | Compare a guid code | OK | Ready |
| isEmpty ( ): boolean | Validate if a guid is empty  | OK | Ready |
| toString ( ): string | Parse a guid instance to string format  | OK | Ready |
| toJSON ( ): any | Parse to JSON format  | OK | Ready |


