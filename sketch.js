var problem,bg,gameState,header , code1,code2,code3,code4;

function preload(){
    bg=loadImage("./assets/image.png");
    code1=loadImage("./assets/code1.png");
    code2=loadImage("./assets/code2.png");
    code3=loadImage("./assets/code3.png");
    code4=loadImage("./assets/code4.png");
    gameState=0;
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    header=createSprite(10,70,9999,5);
    
// Creating problem Statement Button
    problem = createButton("PROBLEM STATEMENT");
    problem.position(windowWidth/2-250, 15);
    problem.size(124, 50);
    problem.style('border-radius','20px')
    problem.style('background','transparent');
    problem.style('color','white');
    problem.style('padding','10px')
    problem.style('font-size','15px');
    problem.style('border-color','white');
    problem.style('font-family','Roboto')
    problem.mousePressed(problemClicked);

// Creating Solution Button
    Solution = createButton("SOLUTION");
    Solution.position(windowWidth/2, 15);
    Solution.style('text-allign','center');
    Solution.size(140, 50);
    Solution.style('background','transparent');
    Solution.style('color','white');
    Solution.style('border-radius','20px')
    Solution.style('padding','10px')
    Solution.style('font-size','15px');
    Solution.style('border-color','white');
    Solution.style('font-family','Roboto')
    Solution.mousePressed(solutionClicked);

// Creating Code Snippets Button
    code = createButton("CODE SNIPPETS");
    code.position(windowWidth-260, 15);
    code.size(124, 50);
    code.style('background','transparent');
    code.style('color','white');
    code.style('border-radius','20px');
    code.style('text-allign','center');
    code.style('padding','10px')
    code.style('font-size','15px');
    code.style('border-color','white');
    code.style('font-family','Roboto');
    code.mousePressed(codeClicked);

    // Creating GUI Button
    gui = createButton(" GUI ");
    gui.position(windowWidth/2+260, 15);
    gui.style('font-size','15px')
    gui.size(124, 50);
    gui.style('background','transparent');
    gui.style('color','white');
    gui.style('border-radius','20px')
    gui.style('padding','10px')
    gui.style('border-color','white');
    gui.style('font-family','Roboto')
    gui.mousePressed(guiClicked);
    
}

function draw(){
    background(bg);
    

    drawSprites();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function problemClicked(){
    console.log("problem was clicked HAHA ");

    statement=createButton('🇸‌🇹‌🇦‌🇹‌🇪‌🇲‌🇪‌🇳‌🇹‌:"🇪‌🇳‌🇸‌🇺‌🇷‌🇮‌🇳‌🇬‌ 🇴‌🇳‌🇱‌🇮‌🇳‌🇪‌ 🇪‌🇽‌🇦‌🇲‌ 🇮‌🇳‌🇹‌🇪‌🇬‌🇷‌🇮‌🇹‌🇾‌",🇸‌🇦‌🇫‌🇪‌🇬‌🇺‌🇦‌🇷‌🇩‌🇮‌🇳‌🇬‌ 🇴‌🇳‌🇱‌🇮‌🇳‌🇪‌ 🇦‌🇸‌🇸‌🇪‌🇸‌🇲‌🇪‌🇳‌🇹‌🇸‌ 🇼‌🇮‌🇹‌🇭‌ 🇨‌🇴‌🇲‌🇵‌🇷‌🇪‌🇭‌🇪‌🇳‌🇸‌🇮‌🇻‌🇪‌ 🇸‌🇪‌🇨‌🇺‌🇷‌🇮‌🇹‌🇾‌ 🇲‌🇪‌🇦‌🇸‌🇺‌🇷‌🇪‌🇸‌')
    statement.position(windowWidth/2-750, 100);
    statement.style('text-allign','left');
    statement.size(900, 50);
    statement.style('background','transparent');
    statement.style('color','white');
    statement.style('font-size','25px')
    statement.style('border-radius','20px')
    statement.style('padding','10px')
    statement.style('text-align','center')
    statement.style('border-color','transparent')

    description=createButton('🇩‌🇪‌🇸‌🇨‌🇷‌🇮‌🇵‌🇹‌🇮‌🇴‌🇳‌: 🇮‌🇲‌🇦‌🇬‌🇮‌🇳‌🇪‌ 🇾‌🇴‌🇺‌ 🇭‌🇦‌🇻‌🇪‌ 🇧‌🇪‌🇪‌🇳‌ 🇬‌🇮‌🇻‌🇪‌🇳‌ 🇹‌🇭‌🇪‌ 🇷‌🇪‌🇸‌🇵‌🇴‌🇳‌🇸‌🇮‌🇧‌🇮‌🇱‌🇮‌🇹‌🇾‌ 🇴‌🇫‌ 🇨‌🇴‌🇳‌🇩‌🇺‌🇨‌🇹‌🇮‌🇳‌🇬‌ 🇦‌🇳‌ 🇴‌🇳‌🇱‌🇮‌🇳‌🇪‌ 🇪‌🇽‌🇦‌🇲‌🇮‌🇳‌🇦‌🇹‌🇮‌🇴‌🇳‌ 🇦‌🇹‌ 🇾‌🇴‌🇺‌🇷‌ 🇸‌🇨‌🇭‌🇴‌🇴‌🇱‌, 🇼‌🇮‌🇹‌🇭‌ 🇹‌🇭‌🇪‌ 🇲‌🇦‌🇮‌🇳‌ 🇴‌🇧‌🇯‌🇪‌🇨‌🇹‌🇮‌🇻‌🇪‌ 🇹‌🇴‌ 🇪‌🇳‌🇸‌🇺‌🇷‌🇪‌ 🇴‌🇳‌🇱‌🇾‌ 🇹‌🇭‌🇪‌ 🇦‌🇺‌🇹‌🇭‌🇴‌🇷‌🇮‌🇿‌🇪‌🇩‌ 🇸‌🇹‌🇺‌🇩‌🇪‌🇳‌🇹‌ 🇹‌🇦‌🇰‌🇪‌🇸‌ 🇹‌🇭‌🇪‌ 🇪‌🇽‌🇦‌🇲‌. 🇹‌🇴‌ 🇩‌🇴‌ 🇹‌🇭‌🇮‌🇸‌ , 🇮‌🇹‌ 🇮‌🇸‌ 🇪‌🇸‌🇸‌🇪‌🇳‌🇹‌🇮‌🇦‌🇱‌ 🇹‌🇴‌ 🇵‌🇺‌🇹‌ 🇮‌🇳‌ 🇵‌🇱‌🇦‌🇨‌🇪‌ 🇦‌ 🇳‌🇺‌🇲‌🇧‌🇪‌🇷‌ 🇴‌🇫‌ 🇵‌🇷‌🇪‌🇻‌🇪‌🇳‌🇹‌🇮‌🇻‌🇪‌ 🇲‌🇪‌🇦‌🇸‌🇺‌🇷‌🇪‌🇸‌ 🇩‌🇪‌🇸‌🇮‌🇬‌🇳‌🇪‌🇩‌ 🇹‌🇴‌ 🇸‌🇦‌🇫‌🇪‌🇬‌🇺‌🇦‌🇷‌🇩‌ 🇦‌🇬‌🇦‌🇮‌🇳‌🇸‌🇹‌ 🇲‌🇦‌🇱‌🇵‌🇷‌🇦‌🇨‌🇹‌🇮‌🇨‌🇪‌🇸‌')
    description.position(windowWidth/2-750,280);
    description.style('text-allign','left');
    description.size(900, 50);
    description.style('background','transparent');
    description.style('color','white');
    description.style('font-size','25px')
    description.style('border-radius','20px')
    description.style('padding','10px')
    description.style('text-align','center')
    description.style('border-color','transparent')

    HomeButton();
    hideButtons();

    }

function solutionClicked(){
    console.log("solution was clicked HAHA ");
    hideButtons();
    HomeButton();
    
  }

function codeClicked(){

    console.log("code was clicked HAHA ");
    thisIsCode=createButton('𝒯𝒽𝒾𝓈 𝒾𝓈 𝓉𝒽𝑒 𝒸𝑜𝒹𝑒 𝓌𝑒 𝒽𝒶𝓋𝑒 𝓊𝓈𝑒𝒹 :');
    // Insert image or Button 

    //    
    thisIsCode.position(windowWidth/2-800, 30);
    thisIsCode.style('text-allign','left');
    thisIsCode.size(500, 50);
    thisIsCode.style('background','transparent');
    thisIsCode.style('color','white');
    thisIsCode.style('font-size','25px')
    thisIsCode.style('border-radius','20px')
    thisIsCode.style('padding','10px')
    thisIsCode.style('text-align','center')
    thisIsCode.style('border-color','transparent')
    thisIsCode.style('font-family','Roboto');

    codeSnip=createButton('')

    HomeButton();
    hideButtons()

  }

function guiClicked() {
    HomeButton();
    hideButtons();
}
function HomeButton() {
    homeButton=createButton('Return To Home');
    homeButton.position(1340,675);
    homeButton.size(170, 50);
    homeButton.style('background','transparent');
    homeButton.style('color','white');
    homeButton.style('font-size','13px')
    homeButton.style('border-radius','20px')
    homeButton.style('padding','10px')
    homeButton.style('text-align','center')
    homeButton.style('border-color','white');
    homeButton.style('font-family','Roboto')
    homeButton.mousePressed(Return);
}

function hideButtons() {

    problem.hide();
    Solution.hide();
    code.hide();
    gui.hide();
    header.visible=false;


}

function Return(){

    statement.hide();
    description.hide();
    
    problem.show();
    Solution.show();
    code.show();
    gui.show();
    header.visible=true;
    homeButton.hide();
    thisIsCode.hide();


}