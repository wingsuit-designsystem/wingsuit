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
            expect(pattern.getLabel()).not.toBeNull();
            expect(pattern.getId()).not.toBeNull();
            expect(Object.keys(pattern.getPatternVariants()).length).toEqual(variantsCount);
            const defaultVariant: PatternVariant = pattern.getDefaultVariant();
            expect(defaultVariant.getLabel()).not.toBeNull();
            expect(settingsCount).toEqual(Object.keys(defaultVariant.getSettings()).length);
            expect(fieldsCount).toEqual(Object.keys(defaultVariant.getFields()).length);
        }
    )
});