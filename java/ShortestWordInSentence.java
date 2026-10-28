package tasks;

public class ShortestWordInSentence {

    public static String shortestWord(String input){
        String cleanInput = input.trim();
        String [] words = cleanInput.split(" ");

        String result = words[0];

        for (String word : words){
            if(word.matches("[a-zA-z0-9]+") && (word.length() < result.length())) result = word;
            }
        return result;
    }
}
