describe("index.js", () => {
  describe("greet() function", () => {
    it("Returns Good Morning before 12pm", () => {
      expect(greet(840)).to.equal('Good Morning')
    })
    it("Returns Good Afternoon between 12pm and 5pm ", () => {
      expect(greet(1421)).to.equal('Good Afternoon')
    })
    it("Returns Good Evening after 5pm", () => {
      expect(greet(1900)).to.equal('Good Evening')
    })
  })

  describe("displayMessage() function", () => {
    it("updates the DOM with an appropriate message", () => {
      let testContent = "TEST"
      displayMessage(testContent)
      let content = document.getElementById("greeting").innerText
      expect(content).to.equal(testContent)
    })
  })
})
