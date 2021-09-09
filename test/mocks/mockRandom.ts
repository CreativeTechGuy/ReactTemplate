import { SeededRandom } from "~/utils/seededRandom";

const random = new SeededRandom(0);

// eslint-disable-next-line jest/require-top-level-describe
beforeEach(() => {
    random.setSeed(123456789);
    jest.spyOn(Math, "random").mockImplementation(() => {
        return random.random();
    });
});
