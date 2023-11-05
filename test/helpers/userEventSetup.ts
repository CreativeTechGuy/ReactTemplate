import { jest } from "@jest/globals";
import { userEvent } from "@testing-library/user-event";
import type { Options, UserEvent } from "@testing-library/user-event";

/**
 * Setup user-event instance with custom defaults
 */
export function userEventSetup(options: Options = {}): UserEvent {
    return userEvent.setup({
        advanceTimers: jest.advanceTimersByTime.bind(jest),
        ...options,
    });
}
