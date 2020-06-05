import 'mocha';
import { expect } from 'chai';
import {group} from "../index";

class CustomType {
    constructor(
        public id: string
    ) {}

    equal(b: CustomType) {
        return this.id.split('').reverse() === b.id.split('').reverse();
    }
}

const list = [
    {
        text: 'Adam',
        number: 4,
        custom: new CustomType('Adam'),
        array: ['kot', 'pies'],
        object: {
            text: 'madA',
            array: [0, 1, 2, 3]
        }
    },
    {
        text: 'Jan',
        number: 6,
        array: ['slon', 'zyrafa'],
        object: {
            text: 'naJ',
            array: [4, 5, 6]
        }
    },
    {
        text: 'Wolf',
        number: 3,
        array: ['kon', 'osiol'],
        object: {
            text: 'floW',
            array: [7]
        }
    },
];

describe('tests', () => {
    describe('find', () => {
        it('should compare text', () => {
            list.reduce(group(c => [c.text, c.array[0]]), {})
        })
        // it('should test regexp', () => {})
        // it('should compare number', () => {})
        // it('should compare Date', () => {})
        // it('should compare CustomType', () => {})
    });

    // describe('compare', () => {
    //     it('should return basic type', () => {
    //         expect(getMarkers(TestClass).get('pString').get(Prop)).to.equal(String);
    //     });
    // });
});