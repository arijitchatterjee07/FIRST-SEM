class FormFeedExample {
    public static void main(String[] args) {
        char ch='\'';
        System.out.println(ch);
        System.out.println("First\fPage\fContent");
        //System.out.print("\f"); 
        System.out.println("Second \'Page\' Content");
        //System.out.println("End of Chapter 1." + '\f' + "Start of Chapter 2.");
    }
}