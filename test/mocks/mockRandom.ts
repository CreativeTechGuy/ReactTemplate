import { beforeEach, jest } from "@jest/globals";
import { SeededRandom } from "~/utils/seededRandom";

const random = new SeededRandom(0);

beforeEach(() => {
    random.setSeed(123456789);
    jest.spyOn(Math, "random").mockImplementation(() => {
        return random.random();
    });
});
