import * as path from "path";
import PatternStorage from "../src/PatternStorage";
import Pattern from "../src/Pattern";
import PatternVariant from "../src/PatternVariant";

describe("Pattern parsing", () => {
    const storage = new PatternStorage();
    beforeEach(() => {
        storage.createDefinitionsFromFile(path.join(__dirname, '_data/patterns.json'));
    });
    test.each([['blank', 1, 0, 0],['card', 2, 3, 2]])(
        "pattern %p should have %p variants, %p fields and %p settings.",
        (pattern_id: string, variantsCount: number, fieldsCount: number, settingsCount: number) => {
            const pattern: Pattern = storage.loadPattern(pattern_id);
            expect(pattern.label).not.toBeNull();
            expect(pattern.id).not.toBeNull();
            expect(Object.keys(pattern.patternVariants).length).toEqual(variantsCount);
            const defaultVariant: PatternVariant = pattern.defaultVariant;
            expect(defaultVariant.label).not.toBeNull();
            expect(settingsCount).toEqual(Object.keys(defaultVariant.settings).length);
            expect(fieldsCount).toEqual(Object.keys(defaultVariant.fields).length);
        }
    )
});