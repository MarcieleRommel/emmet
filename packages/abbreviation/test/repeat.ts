import { equal } from 'assert';
import Scanner from '@emmetio/scanner';
import repeat from '../src/repeat';

describe('Repeat', () => {
    const parse = (str: string) => repeat(new Scanner(str));

    it('basic', () => {
        equal(parse('*3')!.count, 3);
        equal(parse('*123')!.count, 123);
        equal(parse('*123foo')!.count, 123);
        equal(parse('*')!.count, 1);
    });
});
