import { jest } from "@jest/globals";
import { userEvent } from "@testing-library/user-event";

/**
 * Setup user-event instance with custom defaults
 */
export function userEventSetup(
    options: Parameters<(typeof userEvent)["setup"]>[0] = {}
): ReturnType<(typeof userEvent)["setup"]> {
    return userEvent.setup({
        advanceTimers: jest.advanceTimersByTime.bind(jest),
        ...options,
    });
}
