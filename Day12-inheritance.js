class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores)
    {
        super(firstName, lastName, id)
        this.scores = scores
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate()
    {
        let owl = [[90, 'O'], [80, 'E'], [70, 'A'], [55, 'P'], [40, 'D'], [0, 'T']]
        let avgGrade = (this.scores.reduce((acc, cur) => acc + cur))/this.scores.length
        for(let i=0; i<owl.length; i++)
        {
            if(avgGrade >= owl[i][0])
            {
                return owl[i][1]
            }
        }
    }
}