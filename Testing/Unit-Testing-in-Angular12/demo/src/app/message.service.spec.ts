import { MessageService } from "./message.service";

describe("MessageService", () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it("should have no message to start", () => {
    expect(service.messages.length).toBe(0);
  });

  it("shoule add a message", () => {
    service.add("message1");

    expect(service.messages.length).toBe(1);
  });

  it("shoule remove all message when clear is called", () => {
    service.add("message1");
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
