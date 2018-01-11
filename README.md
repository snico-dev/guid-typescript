# Guid Typescript

Guid Typescript is library that let you generate guid code

## Instalation and usage
### Instalation

```
npm i guid-typescript --save
```

### Basic usage

```
Guid.create() ==> b77d409a-10cd-4a47-8e94-b0cd0ab50aa1

```

## Props and Methods

| Method/Prop | Desc | Test | Status |
|---|---|---|---|
| static isGuid(guid: any): boolean | check if value is a guid code | OK | Ready |
| static create(): Guid | create new guid | OK | Ready |
| static createEmpty(): Guid | create guid empty | OK | Ready |
| static parse(guid: string): Guid | given a guid code create a Guid instance  | OK | Ready |
| static raw(): string | create a guid code in string format  | OK | Ready |
| equals(other: Guid): boolean | compare guid  | OK | Ready |
| isEmpty(): boolean | valid if guid is empty  | OK | Ready |
| toString(): string | parse guid to string format  | OK | Ready |
| toJSON(): any | parse to json format  | OK | Ready |


