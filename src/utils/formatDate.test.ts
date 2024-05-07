import { assertDate, dateToShortIso } from './formatDate'


describe("#formatDate", () => {
  describe("#dateToShortIso", () => {
    it("should format JSDate Object to short ISO string", () => {
      expect(dateToShortIso(new Date('2024-02-03T00:00'))).toBe('2024-02-03T00:00')
      expect(dateToShortIso(new Date('2024-05-12T00:20'))).toBe('2024-05-12T00:20')
      expect(dateToShortIso('Invalid DateTime')).toBe('')
    })
  })

  describe("#assertDate", () => {
    it("should assert JSDate Object creation", () => {
      expect(assertDate('2024-05-12T00:20')).toBeTruthy()
      expect(assertDate('2024-02-33T00:00')).toBeFalsy()
      expect(assertDate('AS')).toBeFalsy()
    })
  })
})
