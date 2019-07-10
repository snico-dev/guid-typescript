# Easy GUIDs for Typescript (ez-guid)
[![Build Status](https://travis-ci.com/ez-libs/ez-guid.svg?branch=master)](https://travis-ci.com/ez-libs/ez-guid)
[![npm version](https://badge.fury.io/js/ez-guid.svg)](https://badge.fury.io/js/ez-guid)  
The library ez-guid serves as type definition for globally unique IDs(GUIDs) in Typescript and therefore provides interfaces to generate/parse/compare/validate them.

## Supported GUID Formats
Hyphenated (default, "readable", 36 chars):
```
b77d409a-10cd-4a47-8e94-b0cd0ab50aa1
```

Non-hyphenated (32 chars):
```
b77d409a10cd4a478e94b0cd0ab50aa1
```
**All GUIDs are transformed and stored internally as defined in the RFC 4122 specification**

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
#### Random GUID
```typescript
import { Guid } from "ez-guid";

export class Example {
    public id: Guid;
    constructor() {
        //using the static method
        this.id = Guid.create(); // ==> random GUID, e.g. b77d409a-10cd-4a47-8e94-b0cd0ab50aa1

        //using the provided constructor
        this.id = new Guid(); //random aswell
    }
}
```

#### GUID from a string
```typescript
import { Guid } from "ez-guid";

export class Example {
    public id: Guid;
    constructor() {
        //using the static method
        this.id = Guid.create("b77d409a-10cd-4a47-8e94-b0cd0ab50aa1");

        //using the provided constructor
        this.id = new Guid("b77d409a-10cd-4a47-8e94-b0cd0ab50aa1");

        //no hyphens
        this.id = new Guid("b77d409a10cd4a478e94b0cd0ab50aa1"); //transformed to b77d409a-10cd-4a47-8e94-b0cd0ab50aa1
    }
}
```

## Props and Methods

| Method/Prop | Description|
|---|---|
| static isValid (guid: any): boolean | Check if value is a guid code |
| static create (guid?: string): Guid | Creates a new Guid instance; random if no param given |
| static createEmpty (): Guid | Creates an empty GUID |
| static random(): string | Creates and returns a random GUID string |
| equals (other: Guid): boolean | Compares two Guid instances with each other |
| isEmpty (): boolean | Validates if a GUID instance is empty (GUID containing only zeros)  |
| toString (): string | Returns a guid as string  |
| toShortString(): string | Returns a guid as string without hyphens |

## Why bother with yet another GUID TypeScript library?
Well, there are indeed a few GUID/UUID-related libraries out there! Most of them are not maintained anymore or lack functionality for GUID handling, that's why *ez-guid* was started.
