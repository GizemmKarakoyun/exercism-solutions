export function convert(input : string) : string {
    let lines = input.split("\n");
    let result = '';
    for(let h = 0; h < lines.length/4; h++)
    {
        for(let i = 0; i < lines[0].length/3; i++)
        {
            result += convertCharacter(lines.slice(h*4,(h+1)*4).map(function(line) {
                return line.substr(i*3, 3);
            }));
        }
        if(h < lines.length/4 - 1)
        {
            result += ",";
        }
    }
  return result;
}

function matchPattern(input: Array<string>, pattern: Array<string>) : boolean
{
    return input[0] === pattern[0] && input[1] === pattern[1] && input[2] === pattern[2];
}

function convertCharacter(input : Array<string>) : string {
    if(matchPattern(input, [" _ " , "| |", "|_|"]))
    {
        return "0";
    } else if(matchPattern(input, ["   " , "  |" ,"  |"])) {
        return "1";
    } else if(matchPattern(input, [" _ ", " _|", "|_ "])) {
        return "2";
    } else if(matchPattern(input, [" _ ", " _|", " _|"])) {
        return "3";
    } else if(matchPattern(input, ["   ", "|_|", "  |"])) {
        return "4";
    } else if(matchPattern(input, [" _ ", "|_ ", " _|"])) {
        return "5";
    } else if(matchPattern(input, [" _ ", "|_ ", "|_|"])) {
        return "6";
    } else if(matchPattern(input, [" _ ", "  |", "  |"])) {
        return "7";
    } else if(matchPattern(input, [" _ ", "|_|", "|_|"])) {
        return "8";
    } else if(matchPattern(input, [" _ ", "|_|", " _|"])) {
        return "9";
    }
    return "?";
}