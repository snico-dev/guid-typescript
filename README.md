# Easy GUIDs for Typescript (ez-guid)
[![Build Status](https://travis-ci.com/gekkedev/guid-typescript.svg?branch=master)](https://travis-ci.com/gekkedev/guid-typescript)
[![npm version](https://badge.fury.io/js/ez-guid.svg)](https://badge.fury.io/js/ez-guid)  
The library ez-guid serves as type definition for globally unique IDs(GUIDs) in Typescript and therefore provides interfaces to generate/parse/compare/validate them.

## Getting started
### Installation

```
npm i ez-guid
```
  
For NPM version < 5
```
npm install ez-guid --save
```

### Instantiation
```typescript
import { Guid } from "ez-guid";

export class Example {
    public id: Guid;
    constructor() {
        this.id = Guid.create(); // ==> e.g. b77d409a-10cd-4a47-8e94-b0cd0ab50aa1
    }
}
```

## Props and Methods

| Method/Prop | Description|
|---|---|
| static isGuid (guid: any): boolean | Check if value is a guid code |
| static create (guid?: string): Guid | Creates a new Guid instance; random if no param given |
| static createEmpty ( ): Guid | Create an empty guid |
| equals (other: Guid): boolean | Compares two Guid instances with each other |
| isEmpty ( ): boolean | Validate if a guid is empty  |
| toString ( ): string | Parse a guid instance to string format  |
| toJSON ( ): any | Parse to JSON format  |
