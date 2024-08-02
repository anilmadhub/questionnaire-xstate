import { assign, createMachine } from "xstate"

export const addMedicineMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QEEIQLKQJYGMsDsx0BDHACwLADoBlAF2ICc6BiAW2z0KuLUgG0ADAF1EoAA4B7WFjpZJ+MSAAeiAIwBmAExU1AVgBsWjQE5BAFkEaDGtQBoQAT0QAOAOxUTag3pd63blpqJnomAL5hDqgYnJQk5JRUmBC4lAAEvBCQLABmkoxsPHwQQqJIIFIycgpKqgjmLmpUbo3Gglp6gm56euZuDs4I7p7evv6BwaERUWjJqYTxFNwAYvlsGcUsENLEMEVZJSJKlbLyiuV1bgYmVMbmGpaj3n4Drh5ePn4BQSHhkSDROZcIikJbUAAiOxgGwOWyh1DAADcwIxHBBiI59gIjuUTtVzqA6mpBCZzFQXGZQuZqeZOlZXghNDcTCyTBoXIJ2i1BAYXNMAbNYgtQYlIbBdmAYdkAFYAV1gdCoChw1Ey2LKEmkpxqF3UJLJFMEVJpdI0DMaVHMrP02gMXQpGn5gKFIIS3DFErSSJRaIxUogLAAjrLiPg5HRMejMWrDhqKlr8bV1IYmoaetT7W5zAymZ5WezOVpubynYKUsDFokAFLyuhpZWSmNw8V7YOh8PR4qlY4Js5Jxkp8mU3qWFpZ81NK0sm1aO0tNmlmLluIi7gARRDYdkjgy+AgaSj-vYLqxECoOEkbHEABswHQwN3cb2dYTEFp2oIqDytOYfyE1L+2ZOOoph5iyBZchyJb-M6y7Cm61Abu225HhwcGqsU56Xjed4PjimpVH2uoIO+75fkYgH-oBE6Wtaei2vaC78vgkhZPA5SwfMrpgj2hEvioiAALQGAywmLkCK4IbQDDMLx2oEgJ9RaOaLiWqMXwTL85jiS6lbcBJhD+nJibEbYTRuGo7haCY1zXFcAQqWpnzjD8vh-DMS5cXp1CrAURlPnxCl1EYqlmEYWhFgBtr2MBQyqeY6kuZMpI6eh3lUB60IxsZRGvggbIGLoFkuLY3RdM8jkJc53yTBSqVeauELwl6yKooe2UBfJ-aaNoVCGD+fRFpYgglTmli0eBHKQTyfIwWWDVSTWCr1vgKr+QRXXEZo-hqcNmhqN4Pg0ayXj0bOjGOnNnkVo1VBIVuEa7vu7XFDl-FEm4Jg6GmnSznaBgObFAGflObJTUWUGzR5BncYk90dut8aBd1LhkV9NkjUWP52spsUWidM5zg69U3VJ0RpGhXFpBeV63veb1BW+kWeDyAHdA8XiaJVox6JZ75+Ho1kRBEQA */
  context: { name: "", form: "", dosage: "", quantity: 0 },
  id: "AddMedicineMachine",
  initial: "Start",
  states: {
    Start: {
      on: {
        "medicine.added": {
          actions: assign({
            name: ({ event }) => event.name,
          }),
          target: "Medicine added",
        },
      },
    },
    "Medicine added": {
      on: {
        "form.added": {
          actions: assign({
            form: ({ event }) => event.form,
          }),
          target: "Form added",
        },
      },
    },
    "Form added": {
      on: {
        "dosage.added": {
          actions: assign({
            dosage: ({ event }) => event.dosage,
          }),
          target: "Dosage added",
        },
      },
    },
    "Dosage added": {
      on: {
        "dosage.everyday.added": {
          target: "Dosage everyday added",
        },
        "just.once.added": {
          actions: assign({
            quantity: ({ event }) => event.quantity,
          }),
          target: "Just once added",
        },
      },
    },
    "Dosage everyday added": {
      on: {
        "quantity.day.added": {
          target: "Quantity and day added",
        },
      },
    },
    "Just once added": {
      on: {
        "dosage.quantity.added": {
          target: "Quantity added",
        },
      },
    },
    "Quantity and day added": {
      on: {
        "medicine.added.complete.everyday": {
          target: "Add medicine complete",
        },
      },
    },
    "Quantity added": {
      on: {
        "medicine.added.complete.justonce": {
          target: "Add medicine complete",
        },
      },
    },
    "Add medicine complete": {
      type: "final",
    },
  },
})
