import realUserEvent from "@testing-library/user-event";

/**
 * Setup user-event instance with custom defaults
 */
export function userEventSetup(
    options: Parameters<(typeof realUserEvent)["setup"]>[0] = {}
): ReturnType<(typeof realUserEvent)["setup"]> {
    return realUserEvent.setup({
        advanceTimers: jest.advanceTimersByTime,
        ...options,
    });
}
