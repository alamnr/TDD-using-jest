const functions = require('./functions');

test('Add 2 + 2 to equal 4',()=>{
    expect(functions.add(2,2)).toBe(4);
});

test('Add 2 + 2 to Not equal 5',()=>{
    expect(functions.add(2,2)).not.toBe(5);
})

// CHECK FOR TRUTHY AND FALSY VALUES

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement as false

test('should be null',()=>{
    expect(functions.isNull()).toBeNull();
});

test('is undefined',()=>{
    expect(functions.isUndefined()).toBeUndefined();
});

test('should be falsy',()=>{
    expect(functions.checkValue(0)).toBeFalsy();
});

test('should be truthy',()=>{
    expect(functions.checkValue(1)).toBeTruthy();
});

test('user should be Brad traversy',()=>{
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

test('should be under 1600',()=>{
    const l1 = 800;
    const l2 = 700;
    expect(l1+l2).toBeLessThan(1600);
    expect(l1+l2).toBeLessThanOrEqual(1600);
});

// RegEx
test('There is no I in team',()=>{
    expect('teami').not.toMatch(/I/);
});

// Array
test('Admin should be in user name',()=>{
    userNames = ['john','karen','admin'];
    expect(userNames).toContain('admin');
});

// working with async data
test('user fetched name  shoud be Graham', ()=>{
    expect.assertions(1);
})
