import { dateToShortIso } from './formatDate'


describe("#formatDate", () => {
  describe("#dateToShortIso", () => {
    it("should format JSDate Object to short ISO string", async () => {
      expect(dateToShortIso(new Date('2024-03-12'))).toBe('2024-03-12T00:00')
    })
  })
})
