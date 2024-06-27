import add from "./stringCalculator";

test('return 0 for an empty string', () => {
    expect(add('')).toBe(0);
});

test('returns the number for a single input', () => {
    expect(add('1')).toBe(1);
});

test('returns the sum of two numbers', () => {
    expect(add('1,4')).toBe(5);
});

test('returns the sum of multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});

test('returns the sum of numbers with new lines', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('supports different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('throws an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});
  
test('throws an error for multiple negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
});