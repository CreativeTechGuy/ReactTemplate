import { jest } from "@jest/globals";
import { userEvent, type Options, type UserEvent } from "@testing-library/user-event";

/**
 * Setup user-event instance with custom defaults
 */
export function userEventSetup(options: Options = {}): UserEvent {
    return userEvent.setup({
        advanceTimers: jest.advanceTimersByTime.bind(jest),
        ...options,
    });
}
