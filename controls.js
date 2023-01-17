class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;
        
/**hashtag # is put due to private method you can't put from the outside */
        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){
        /**keydown event */
        document.onkeydown = (event)=>{
            switch(event.key){
                case "ArrowLeft":
                     this.left = true;
                     break;
                case "ArrowRight":
                     this.right = true;
                     break;
                case "ArrowUp":
                      this.forward = true;
                      break;
                case "ArrowDown":
                     this.reverse = true;
                     break;
            }
            /**printing entire object for debhagging */
            // console.table(this)
        }

        document.onkeyup = (event)=>{
            switch(event.key){
                case "ArrowLeft":
                     this.left = false;
                     break;
                case "ArrowRight":
                     this.right = false;
                     break;
                case "ArrowUp":
                      this.forward = false;
                      break;
                case "ArrowDown":
                     this.reverse = false;
                     break;
            }
            /***for debhagging***/
            // console.table(this);
        }

    }
}