console-dumper
===========

## Example

```javascript
    var Dumper = require("console-dumper");

    var dumper = new Dumper();

    dumper.init();

    var str = "Foo";

    str.Dump();     //Foo

    var obj = {
        something:5
    };

    obj.Dump();     //{"something":5}

    var arr = [1,2,3];

    arr.Dump();     //1,2,3

    var simpleFunction = function() {

        return 5;
    };

    simpleFunction.Dump();  //function () { return 5; }
```

## With Configuration

```javascript
    var Dumper = require("console-dumper");

    var dumper = new Dumper();

    dumper.init({
        DumperFuncName: "PrintToConsole",
        Prefix: "Prefix ",
        Postfix: "\nPostFix"
    });

    var str = "Foo";

    str.PrintToConsole();               //Prefix Foo
                                        //PostFix

    var obj = {
        something:5
    };

    obj.PrintToConsole();               //Prefix {"something":5}
                                        //PostFix

    var arr = [1,2,3];

    arr.PrintToConsole();               //Prefix 1,2,3
                                        //PostFix

    var simpleFunction = function() {

        return 5;
    };

    simpleFunction.PrintToConsole();    //Prefix function () {
                                        //
                                        //return 5;
                                        //}
                                        //PostFix
```

## With Args

```javascript
    var Dumper = require("console-dumper");

    var dumper = new Dumper();

    dumper.init();

    var str = "Foo";

    str.Dump("Hey",1);     //Foo Hey 1
```