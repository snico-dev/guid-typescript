# GUIDs for Typescript
[![Build Status](https://travis-ci.com/gekkedev/guid-typescript.svg?branch=master)](https://travis-ci.com/gekkedev/guid-typescript)
This library serves as type definition for globally unique IDs(GUIDs) in Typescript and therefore helps to generate/parse/compare/validate.

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
| static create (guid?: string): Guid | Creates a new guid instance; random if no param given | OK | Ready |
| static createEmpty ( ): Guid | Create an empty guid | OK | Ready |
| equals (other: Guid): boolean | Compare a guid code | OK | Ready |
| isEmpty ( ): boolean | Validate if a guid is empty  | OK | Ready |
| toString ( ): string | Parse a guid instance to string format  | OK | Ready |
| toJSON ( ): any | Parse to JSON format  | OK | Ready |
