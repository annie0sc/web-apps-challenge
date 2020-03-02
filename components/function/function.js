const avg = (x, y) => { return x * y }

const func = new Vue({
  el: '#func',
  data: {
   
    countOfCourses: 5,
    avgStudentsPerCourse: 3
  },
  computed: {
    result: function () {
      const i = parseInt(this.countOfCourses)
      const j = parseInt(this.avgStudentsPerCourse)
      return `${avg(i, j)}.`
    }
  }
})