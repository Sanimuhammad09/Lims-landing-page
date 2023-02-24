/*
    Testimonial Web
*/
// Variables to target our base class,  get carousel items, count how many carousel items there are, set the TFMCurIndex to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
let TTClassname = "testimonial-carousel-slide-item";
let TTItems = document.getElementsByClassName(TTClassname);
let TTTotalItems = TTItems.length;
let TTCurIndex = 0;
let TTMoving = true;
let TTIntervalId = null;
let TTSecStartedFlag = false;

// To initialise the carousel we'll want to update the DOM with our own classes
const TTSetInitialClasses = () => {
    // Target the last, initial, and next TTItems and give them the relevant class.
    // This assumes there are three or more TTItems.
    TTItems[TTTotalItems - 1].classList.add("prev");
    TTItems[0].classList.add("active");
    TTItems[1].classList.add("next");
};

// Disable interaction by setting 'TTMoving' to true for the same duration as our transition (0.5s = 500ms)
const TTDisableInteraction = () => {
    TTMoving = true;
    setTimeout(() => {
        TTMoving = false;
    }, 500);
};

const TTMoveCarouselTo = (TTCurIndex) => {
    // Check if carousel is TTMoving, if not, allow interaction
    if (!TTMoving) {
        // temporarily disable interactivity
        TTDisableInteraction();

        let easierControls = document.getElementsByClassName(
            "testimonial-carousel-control-item"
        );

        let newNext = TTCurIndex + 1;
        let newPrevious = TTCurIndex - 1;

        if (newPrevious < 0) newPrevious = TTTotalItems - 1;
        else if (newNext > TTTotalItems - 1) newNext = 0;

        // Add the new classes and remove previous
        for (let i = 0; i < TTTotalItems; i++) TTItems[i].className = TTClassname;

        TTItems[newPrevious].className = TTClassname + " prev";
        TTItems[TTCurIndex].className = TTClassname + " active";
        TTItems[newNext].className = TTClassname + " next";

        // Update carousel controls

        for (let i = 0; i < TTTotalItems; i++) {
            if (easierControls[i]) {
                if (i == TTCurIndex)
                    easierControls[i].className =
                        "testimonial-carousel-control-item testimonial-carousel-control-item-selected";
                else easierControls[i].className = "testimonial-carousel-control-item";
            }
        }
    }
};

// Next navigation handler
const TTMoveNext = () => {
    // Check if TTMoving
    if (!TTMoving) {
        // If it's the last TTCurIndex, reset to 0, else +1
        if (TTCurIndex === TTTotalItems - 1) TTCurIndex = 0;
        else TTCurIndex++;

        // Move carousel to updated TTCurIndex
        TTMoveCarouselTo(TTCurIndex);
    }
};

// Previous navigation handler
const TTMovePrev = () => {
    // Check if TTMoving
    if (!TTMoving) {
        // If it's the first TTCurIndex, set as the last TTCurIndex, else -1
        if (TTCurIndex === 0) TTCurIndex = TTTotalItems - 1;
        else TTCurIndex--;

        // Move carousel to updated TTCurIndex
        TTMoveCarouselTo(TTCurIndex);
    }
};

// Initialise carousel
const TTInitCarousel = (index, activateCarouselMobileFlag) => {
    TTSetInitialClasses();

    // Set TTMoving to false now that the carousel is ready
    TTMoving = false;
    TTCurIndex = index;
    TTMoveNext();

    if (activateCarouselMobileFlag) TTActivateCarousel();
};

const TTActivateCarousel = () => {
    return;
};

TTInitCarousel(2, false);


/*
    Testimonial M Web
*/
// Variables to target our base class,  get carousel items, count how many carousel items there are, set the TFMCurIndex to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
let TTMClassname = "testimonial-carousel-slide-item-mweb";
let TTMItems = document.getElementsByClassName(TTMClassname);
let TTMTotalItems = TTMItems.length;
let TTMCurIndex = 0;
let TTMMoving = true;
let TTMIntervalId = null;
let TTMSecStartedFlag = false;

// To initialise the carousel we'll want to update the DOM with our own classes
const TTMSetInitialClasses = () => {
    // Target the last, initial, and next TTItems and give them the relevant class.
    // This assumes there are three or more TTItems.
    TTMItems[TTMTotalItems - 1].classList.add("prev");
    TTMItems[0].classList.add("active");
    TTMItems[1].classList.add("next");
};

// Disable interaction by setting 'TTMoving' to true for the same duration as our transition (0.5s = 500ms)
const TTMDisableInteraction = () => {
    TTMMoving = true;
    setTimeout(() => {
        TTMMoving = false;
    }, 500);
};

const TTMMoveCarouselTo = (TTMCurIndex) => {
    // Check if carousel is TTMoving, if not, allow interaction
    if (!TTMMoving) {
        // temporarily disable interactivity
        TTMDisableInteraction();

        let easierControls = document.getElementsByClassName(
            "testimonial-carousel-control-item-mweb"
        );

        let newNext = TTMCurIndex + 1;
        let newPrevious = TTMCurIndex - 1;

        if (newPrevious < 0) newPrevious = TTMTotalItems - 1;
        else if (newNext > TTMTotalItems - 1) newNext = 0;

        // Add the new classes and remove previous
        for (let i = 0; i < TTMTotalItems; i++) TTMItems[i].className = TTMClassname;

        TTMItems[newPrevious].className = TTMClassname + " prev";
        TTMItems[TTMCurIndex].className = TTMClassname + " active";
        TTMItems[newNext].className = TTMClassname + " next";

        // Update carousel controls

        for (let i = 0; i < TTMTotalItems; i++) {
            if (easierControls[i]) {
                if (i == TTMCurIndex)
                    easierControls[i].className =
                        "testimonial-carousel-control-item-mweb testimonial-carousel-control-item-selected-mweb";
                else easierControls[i].className = "testimonial-carousel-control-item-mweb";
            }
        }
    }
};

// Next navigation handler
const TTMMoveNext = () => {
    // Check if TTMoving
    if (!TTMMoving) {
        // If it's the last TTCurIndex, reset to 0, else +1
        if (TTMCurIndex === TTMTotalItems - 1) TTMCurIndex = 0;
        else TTMCurIndex++;

        // Move carousel to updated TTCurIndex
        TTMMoveCarouselTo(TTMCurIndex);
    }
};

// Previous navigation handler
const TTMMovePrev = () => {
    // Check if TTMoving
    if (!TTMMoving) {
        // If it's the first TTCurIndex, set as the last TTCurIndex, else -1
        if (TTMCurIndex === 0) TTMCurIndex = TTMTotalItems - 1;
        else TTMCurIndex--;

        // Move carousel to updated TTCurIndex
        TTMMoveCarouselTo(TTCurIndex);
    }
};

// Initialise carousel
const TTMInitCarousel = (index, activateCarouselMobileFlag) => {
    TTMSetInitialClasses();

    // Set TTMoving to false now that the carousel is ready
    TTMMoving = false;
    TTMCurIndex = index;
    TTMMoveNext();

    if (activateCarouselMobileFlag) TTMActivateCarousel();
};

const TTMActivateCarousel = () => {
    if (TTMIntervalId) clearInterval(TTMIntervalId);
    TTMIntervalId = window.setInterval(() => {
        TTMMoveNext();
    }, 5000);
};

TTMInitCarousel(2, false);

/**
 * Start carousel when section starts
 */

TTMActivateCarousel();

//mordern learning car

/*
    Testimonial Web
*/
// Variables to target our base class,  get carousel items, count how many carousel items there are, set the TFMCurIndex to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
let MLClassname = "mordern-learning-carousel-slide-item";
let MLItems = document.getElementsByClassName(MLClassname);
let MLTotalItems = MLItems.length;
let MLCurIndex = 0;
let MLMoving = true;
let MLIntervalId = null;
let MLSecStartedFlag = false;

// To initialise the carousel we'll want to update the DOM with our own classes
const MLSetInitialClasses = () => {
    // Target the last, initial, and next TTItems and give them the relevant class.
    // This assumes there are three or more TTItems.
    MLItems[MLTotalItems - 1].classList.add("prev");
    MLItems[0].classList.add("active");
    MLItems[1].classList.add("next");
};

// Disable interaction by setting 'TTMoving' to true for the same duration as our transition (0.5s = 500ms)
const MLDisableInteraction = () => {
    MLMoving = true;
    setTimeout(() => {
        MLMoving = false;
    }, 500);
};

const MLMoveCarouselTo = (MLCurIndex) => {
    // Check if carousel is TTMoving, if not, allow interaction
    if (!MLMoving) {
        // temporarily disable interactivity
        MLDisableInteraction();

        let easierControls = document.getElementsByClassName(
            "mordern-learning-carousel-slide-item"
        );

        let newNext = MLCurIndex + 1;
        let newPrevious = MLCurIndex - 1;

        if (newPrevious < 0) newPrevious = MLTotalItems - 1;
        else if (newNext > MLTotalItems - 1) newNext = 0;

        // Add the new classes and remove previous
        for (let i = 0; i < MLTotalItems; i++) MLItems[i].className = MLClassname;

        MLItems[newPrevious].className = MLClassname + " prev";
        MLItems[MLCurIndex].className = MLClassname + " active";
        MLItems[newNext].className = MLClassname + " next";
    }
};

// Next navigation handler
const MLMoveNext = () => {
    // Check if TTMoving
    if (!MLMoving) {
        // If it's the last TTCurIndex, reset to 0, else +1
        if (MLCurIndex === MLTotalItems - 1) MLCurIndex = 0;
        else MLCurIndex++;

        // Move carousel to updated TTCurIndex
        MLMoveCarouselTo(MLCurIndex);
    }
};

// Previous navigation handler
const MLMovePrev = () => {
    // Check if TTMoving
    if (!MLMoving) {
        // If it's the first TTCurIndex, set as the last TTCurIndex, else -1
        if (MLCurIndex === 0) MLCurIndex = MLTotalItems - 1;
        else MLCurIndex--;

        // Move carousel to updated TTCurIndex
        MLMoveCarouselTo(MLCurIndex);
    }
};

// Initialise carousel
const MLInitCarousel = (index, activateCarouselMobileFlag) => {
    MLSetInitialClasses();

    // Set TTMoving to false now that the carousel is ready
    MLMoving = false;
    MLCurIndex = index;
    MLMoveNext();

    if (activateCarouselMobileFlag) MLActivateCarousel();
};

const MLActivateCarousel = () => {
    if (MLIntervalId) clearInterval(MLIntervalId);
};

MLInitCarousel(2, false);

MLActivateCarousel();

/*
    Testimonial Web 2
*/
// Variables to target our base class,  get carousel items, count how many carousel items there are, set the TFMCurIndex to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
let ML1Classname = "mordern-learning-1-carousel-slide-item";
let ML1Items = document.getElementsByClassName(ML1Classname);
let ML1TotalItems = ML1Items?.length;
let ML1CurIndex = 0;
let ML1Moving = true;
let ML1IntervalId = null;
let ML1SecStartedFlag = false;

// To initialise the carousel we'll want to update the DOM with our own classes
const ML1SetInitialClasses = () => {
    // Target the last, initial, and next TTItems and give them the relevant class.
    // This assumes there are three or more TTItems.
    ML1Items[ML1TotalItems - 1]?.classList.add("prev");
    ML1Items[0]?.classList.add("active");
    ML1Items[1]?.classList.add("next");
};

// Disable interaction by setting 'TTMoving' to true for the same duration as our transition (0.5s = 500ms)
const ML1DisableInteraction = () => {
    ML1Moving = true;
    setTimeout(() => {
        ML1Moving = false;
    }, 500);
};

const ML1MoveCarouselTo = (ML1CurIndex) => {
    // Check if carousel is TTMoving, if not, allow interaction
    if (!ML1Moving) {
        // temporarily disable interactivity
        ML1DisableInteraction();

        let newNext = ML1CurIndex + 1;
        let newPrevious = ML1CurIndex - 1;

        if (newPrevious < 0) newPrevious = ML1TotalItems - 1;
        else if (newNext > ML1TotalItems - 1) newNext = 0;

        // Add the new classes and remove previous
        for (let i = 0; i < ML1TotalItems; i++) ML1Items[i].className = ML1Classname;
        if(ML1Items[newPrevious] &&  ML1Items[ML1CurIndex] && ML1Items[newNext])
        {
            ML1Items[newPrevious].className = ML1Classname + " prev";
            ML1Items[ML1CurIndex].className = ML1Classname + " active";
            ML1Items[newNext].className = ML1Classname + " next";
        }
    }
};

// Next navigation handler
const ML1MoveNext = () => {
    // Check if TTMoving
    if (!ML1Moving) {
        // If it's the last TTCurIndex, reset to 0, else +1
        if (ML1CurIndex === ML1TotalItems - 1) ML1CurIndex = 0;
        else ML1CurIndex++;

        // Move carousel to updated TTCurIndex
        ML1MoveCarouselTo(ML1CurIndex);
    }
};

// Previous navigation handler
const ML1MovePrev = () => {
    // Check if TTMoving
    if (!ML1Moving) {
        // If it's the first TTCurIndex, set as the last TTCurIndex, else -1
        if (ML1CurIndex === 0) ML1CurIndex = ML1TotalItems - 1;
        else ML1CurIndex--;

        // Move carousel to updated TTCurIndex
        ML1MoveCarouselTo(ML1CurIndex);
    }
};

// Initialise carousel
const ML1InitCarousel = (index, activateCarouselMobileFlag) => {
    ML1SetInitialClasses();

    // Set TTMoving to false now that the carousel is ready
    ML1Moving = false;
    ML1CurIndex = index;
    ML1MoveNext();

    if (activateCarouselMobileFlag) ML1ActivateCarousel();
};

const ML1ActivateCarousel = () => {
    if (ML1IntervalId) clearInterval(ML1IntervalId);
};

ML1InitCarousel(2, false);

ML1ActivateCarousel();

/*
    Testimonial Web 2
*/
// Variables to target our base class,  get carousel items, count how many carousel items there are, set the TFMCurIndex to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
let ML2Classname = "mordern-learning-2-carousel-slide-item";
let ML2Items = document.getElementsByClassName(ML2Classname);
let ML2TotalItems = ML2Items.length;
let ML2CurIndex = 0;
let ML2Moving = true;
let ML2IntervalId = null;
let ML2SecStartedFlag = false;

// To initialise the carousel we'll want to update the DOM with our own classes
const ML2SetInitialClasses = () => {
    // Target the last, initial, and next TTItems and give them the relevant class.
    // This assumes there are three or more TTItems.
    ML2Items[ML2TotalItems - 1].classList.add("prev");
    ML2Items[0].classList.add("active");
    ML2Items[1].classList.add("next");
};

// Disable interaction by setting 'TTMoving' to true for the same duration as our transition (0.5s = 500ms)
const ML2DisableInteraction = () => {
    ML2Moving = true;
    setTimeout(() => {
        ML2Moving = false;
    }, 500);
};

const ML2MoveCarouselTo = (ML2CurIndex) => {
    // Check if carousel is TTMoving, if not, allow interaction
    if (!ML2Moving) {
        // temporarily disable interactivity
        ML2DisableInteraction();

        let newNext = ML2CurIndex + 1;
        let newPrevious = ML2CurIndex - 1;

        if (newPrevious < 0) newPrevious = ML2TotalItems - 1;
        else if (newNext > ML2TotalItems - 1) newNext = 0;

        // Add the new classes and remove previous
        for (let i = 0; i < ML2TotalItems; i++) ML2Items[i].className = ML2Classname;

        ML2Items[newPrevious].className = ML2Classname + " prev";
        ML2Items[ML2CurIndex].className = ML2Classname + " active";
        ML2Items[newNext].className = ML2Classname + " next";
    }
};

// Next navigation handler
const ML2MoveNext = () => {
    // Check if TTMoving
    if (!ML2Moving) {
        // If it's the last TTCurIndex, reset to 0, else +1
        if (ML2CurIndex === ML2TotalItems - 1) ML2CurIndex = 0;
        else ML2CurIndex++;

        // Move carousel to updated TTCurIndex
        ML2MoveCarouselTo(ML2CurIndex);
    }
};

// Previous navigation handler
const ML2MovePrev = () => {
    // Check if TTMoving
    if (!ML2Moving) {
        // If it's the first TTCurIndex, set as the last TTCurIndex, else -1
        if (ML2CurIndex === 0) ML2CurIndex = ML2TotalItems - 1;
        else ML2CurIndex--;

        // Move carousel to updated TTCurIndex
        ML2MoveCarouselTo(ML2CurIndex);
    }
};

// Initialise carousel
const ML2InitCarousel = (index, activateCarouselMobileFlag) => {
    ML2SetInitialClasses();

    // Set TTMoving to false now that the carousel is ready
    ML2Moving = false;
    ML2CurIndex = index;
    ML2MoveNext();

    if (activateCarouselMobileFlag) ML2ActivateCarousel();
};

const ML2ActivateCarousel = () => {
    if (ML2IntervalId) clearInterval(ML2IntervalId);
};

ML2InitCarousel(2, false);

ML2ActivateCarousel();

/*
    Simplify Management
*/
// Variables to target our base class,  get carousel items, count how many carousel items there are, set the TFMCurIndex to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
let SMClassname = "sm-1-carousel-slide-item";
let SMItems = document.getElementsByClassName(SMClassname);
let SMTotalItems = SMItems.length;
let SMCurIndex = 0;
let SMMoving = true;
let SMIntervalId = null;
let SMSecStartedFlag = false;

// To initialise the carousel we'll want to update the DOM with our own classes
const SMSetInitialClasses = () => {
    // Target the last, initial, and next TTItems and give them the relevant class.
    // This assumes there are three or more TTItems.
    SMItems[SMTotalItems - 1].classList.add("prev");
    SMItems[0].classList.add("active");
    SMItems[1].classList.add("next");
};

// Disable interaction by setting 'TTMoving' to true for the same duration as our transition (0.5s = 500ms)
const SMDisableInteraction = () => {
    SMMoving = true;
    setTimeout(() => {
        SMMoving = false;
    }, 500);
};

const SMMoveCarouselTo = (SMCurIndex) => {
    // Check if carousel is TTMoving, if not, allow interaction
    if (!SMMoving) {
        // temporarily disable interactivity
        SMDisableInteraction();

        let newNext = SMCurIndex + 1;
        let newPrevious = SMCurIndex - 1;

        if (newPrevious < 0) newPrevious = SMTotalItems - 1;
        else if (newNext > SMTotalItems - 1) newNext = 0;

        // Add the new classes and remove previous
        for (let i = 0; i < SMTotalItems; i++) SMItems[i].className = SMClassname;

        SMItems[newPrevious].className = SMClassname + " prev";
        SMItems[SMCurIndex].className = SMClassname + " active";
        SMItems[newNext].className = SMClassname + " next";
    }
};

// Next navigation handler
const SMMoveNext = () => {
    // Check if TTMoving
    if (!SMMoving) {
        // If it's the last TTCurIndex, reset to 0, else +1
        if (SMCurIndex === SMTotalItems - 1) SMCurIndex = 0;
        else SMCurIndex++;

        // Move carousel to updated TTCurIndex
        SMMoveCarouselTo(SMCurIndex);
    }
};

// Previous navigation handler
const SMMovePrev = () => {
    // Check if TTMoving
    if (!SMMoving) {
        // If it's the first TTCurIndex, set as the last TTCurIndex, else -1
        if (SMCurIndex === 0) SMCurIndex = SMTotalItems - 1;
        else SMCurIndex--;

        // Move carousel to updated TTCurIndex
        SMMoveCarouselTo(SMCurIndex);
    }
};

// Initialise carousel
const SMInitCarousel = (index, activateCarouselMobileFlag) => {
    SMSetInitialClasses();

    // Set TTMoving to false now that the carousel is ready
    SMMoving = false;
    SMCurIndex = index;
    SMMoveNext();

    if (activateCarouselMobileFlag) SMActivateCarousel();
};

const SMActivateCarousel = () => {
    if (SMIntervalId) clearInterval(SMIntervalId);
};

SMInitCarousel(2, false);

SMActivateCarousel();

/*
    Simplify Management 2
*/
// Variables to target our base class,  get carousel items, count how many carousel items there are, set the TFMCurIndex to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
let SM2Classname = "sm-2-carousel-slide-item";
let SM2Items = document.getElementsByClassName(SM2Classname);
let SM2TotalItems = SM2Items.length;
let SM2CurIndex = 0;
let SM2Moving = true;
let SM2IntervalId = null;
let SM2SecStartedFlag = false;

// To initialise the carousel we'll want to update the DOM with our own classes
const SM2SetInitialClasses = () => {
    // Target the last, initial, and next TTItems and give them the relevant class.
    // This assumes there are three or more TTItems.
    SM2Items[SM2TotalItems - 1].classList.add("prev");
    SM2Items[0].classList.add("active");
    SM2Items[1].classList.add("next");
};

// Disable interaction by setting 'TTMoving' to true for the same duration as our transition (0.5s = 500ms)
const SM2DisableInteraction = () => {
    SM2Moving = true;
    setTimeout(() => {
        SM2Moving = false;
    }, 500);
};

const SM2MoveCarouselTo = (SM2CurIndex) => {
    // Check if carousel is TTMoving, if not, allow interaction
    if (!SM2Moving) {
        // temporarily disable interactivity
        SM2DisableInteraction();

        let newNext = SM2CurIndex + 1;
        let newPrevious = SM2CurIndex - 1;

        if (newPrevious < 0) newPrevious = SM2TotalItems - 1;
        else if (newNext > SM2TotalItems - 1) newNext = 0;

        // Add the new classes and remove previous
        for (let i = 0; i < SM2TotalItems; i++) SM2Items[i].className = SM2Classname;

        SM2Items[newPrevious].className = SM2Classname + " prev";
        SM2Items[SM2CurIndex].className = SM2Classname + " active";
        SM2Items[newNext].className = SM2Classname + " next";
    }
};

// Next navigation handler
const SM2MoveNext = () => {
    // Check if TTMoving
    if (!SM2Moving) {
        // If it's the last TTCurIndex, reset to 0, else +1
        if (SM2CurIndex === SM2TotalItems - 1) SM2CurIndex = 0;
        else SM2CurIndex++;

        // Move carousel to updated TTCurIndex
        SM2MoveCarouselTo(SM2CurIndex);
    }
};

// Previous navigation handler
const SM2MovePrev = () => {
    // Check if TTMoving
    if (!SM2Moving) {
        // If it's the first TTCurIndex, set as the last TTCurIndex, else -1
        if (SM2CurIndex === 0) SM2CurIndex = SM2TotalItems - 1;
        else SM2CurIndex--;

        // Move carousel to updated TTCurIndex
        SM2MoveCarouselTo(SM2CurIndex);
    }
};

// Initialise carousel
const SM2InitCarousel = (index, activateCarouselMobileFlag) => {
    SM2SetInitialClasses();

    // Set TTMoving to false now that the carousel is ready
    SM2Moving = false;
    SM2CurIndex = index;
    SM2MoveNext();

    if (activateCarouselMobileFlag) SM2ActivateCarousel();
};

const SM2ActivateCarousel = () => {
    if (SM2IntervalId) clearInterval(SM2IntervalId);
};

SM2InitCarousel(2, false);

SM2ActivateCarousel();


/*
    Simplify Management 2
*/
// Variables to target our base class,  get carousel items, count how many carousel items there are, set the TFMCurIndex to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
let SM3Classname = "sm-3-carousel-slide-item";
let SM3Items = document.getElementsByClassName(SM3Classname);
let SM3TotalItems = SM3Items.length;
let SM3CurIndex = 0;
let SM3Moving = true;
let SM3IntervalId = null;
let SM3SecStartedFlag = false;

// To initialise the carousel we'll want to update the DOM with our own classes
const SM3SetInitialClasses = () => {
    // Target the last, initial, and next TTItems and give them the relevant class.
    // This assumes there are three or more TTItems.
    SM3Items[SM3TotalItems - 1].classList.add("prev");
    SM3Items[0].classList.add("active");
    SM3Items[1].classList.add("next");
};

// Disable interaction by setting 'TTMoving' to true for the same duration as our transition (0.5s = 500ms)
const SM3DisableInteraction = () => {
    SM3Moving = true;
    setTimeout(() => {
        SM3Moving = false;
    }, 500);
};

const SM3MoveCarouselTo = (SM3CurIndex) => {
    // Check if carousel is TTMoving, if not, allow interaction
    if (!SM3Moving) {
        // temporarily disable interactivity
        SM3DisableInteraction();

        let newNext = SM3CurIndex + 1;
        let newPrevious = SM3CurIndex - 1;

        if (newPrevious < 0) newPrevious = SM3TotalItems - 1;
        else if (newNext > SM3TotalItems - 1) newNext = 0;

        // Add the new classes and remove previous
        for (let i = 0; i < SM3TotalItems; i++) SM3Items[i].className = SM3Classname;

        SM3Items[newPrevious].className = SM3Classname + " prev";
        SM3Items[SM3CurIndex].className = SM3Classname + " active";
        SM3Items[newNext].className = SM3Classname + " next";
    }
};

// Next navigation handler
const SM3MoveNext = () => {
    // Check if TTMoving
    if (!SM3Moving) {
        // If it's the last TTCurIndex, reset to 0, else +1
        if (SM3CurIndex === SM3TotalItems - 1) SM3CurIndex = 0;
        else SM3CurIndex++;

        // Move carousel to updated TTCurIndex
        SM3MoveCarouselTo(SM3CurIndex);
    }
};

// Previous navigation handler
const SM3MovePrev = () => {
    // Check if TTMoving
    if (!SM3Moving) {
        // If it's the first TTCurIndex, set as the last TTCurIndex, else -1
        if (SM3CurIndex === 0) SM3CurIndex = SM3TotalItems - 1;
        else SM3CurIndex--;

        // Move carousel to updated TTCurIndex
        SM3MoveCarouselTo(SM3CurIndex);
    }
};

// Initialise carousel
const SM3InitCarousel = (index, activateCarouselMobileFlag) => {
    SM3SetInitialClasses();

    // Set TTMoving to false now that the carousel is ready
    SM3Moving = false;
    SM3CurIndex = index;
    SM3MoveNext();

    if (activateCarouselMobileFlag) SM3ActivateCarousel();
};

const SM3ActivateCarousel = () => {
    if (SM3IntervalId) clearInterval(SM3IntervalId);
};

SM3InitCarousel(2, false);

SM3ActivateCarousel();


function featureMWebCar(classText) {
    let carouselEle = document.getElementById(classText);
    let factor = 1;
    let intervalFunction = setInterval(() => {
        for (let i = 0; i < 3; i++) {
            if (i === factor) {
                document.getElementById(`${classText}-dot-${i}`)?.classList.add("testimonial-carousel-selected-dot");
            }
            else {
                document.getElementById(`${classText}-dot-${i}`)?.classList.remove("testimonial-carousel-selected-dot");
            }
        }
        carouselEle?.scrollTo(carouselEle.scrollWidth * (factor) * 0.33, 0);
        factor = factor + 1;
        if (factor === 3) {
            factor = 0;
        }
    }, 4000);
    let touchPosX = null;
    carouselEle?.addEventListener("touchstart", (e) => {
        touchPosX = e.changedTouches[0].clientX;
        clearInterval(intervalFunction);
    });

    carouselEle?.addEventListener("touchend", (e) => {
        if (e.changedTouches[0].clientX - touchPosX < 0) { }
        else if (e.changedTouches[0].clientX - touchPosX > 0) {
            if (factor === 0) {
                factor = 3;
            }
            factor = factor - 2;
            if (factor < 0) {
                factor = 0;
            }
        }
        else {
            return;
        }
        for (let i = 0; i < 3; i++) {
            if (i === factor) {
                document.getElementById(`${classText}-dot-${i}`).classList.add("testimonial-carousel-selected-dot");
            }
            else {
                document.getElementById(`${classText}-dot-${i}`).classList.remove("testimonial-carousel-selected-dot");
            }
        }
        carouselEle.scrollTo(carouselEle.scrollWidth * (factor) * 0.33, 0);
        factor = factor + 1;
        if (factor >= 3) {
            factor = 0;
        }
        intervalFunction = setInterval(() => {
            for (let i = 0; i < 3; i++) {
                if (i === factor) {
                    document.getElementById(`${classText}-dot-${i}`).classList.add("testimonial-carousel-selected-dot");
                }
                else {
                    document.getElementById(`${classText}-dot-${i}`).classList.remove("testimonial-carousel-selected-dot");
                }
            }
            carouselEle.scrollTo(carouselEle.scrollWidth * (factor) * 0.33, 0);
            factor = factor + 1;
            if (factor >= 3) {
                factor = 0;
            }

        }, 4000);
    })
}

featureMWebCar('feature-mweb-carousel-1');
featureMWebCar('feature-mweb-carousel-2');
featureMWebCar('feature-mweb-carousel-3');
featureMWebCar('feature-mweb-carousel-4');
featureMWebCar('feature-mweb-carousel-5');
featureMWebCar('feature-mweb-carousel-6');

let scrollEle1 = document.getElementById("ml-sub-1");
let scrollEle2 = document.getElementById("ml-sub-2");
let scrollEle3 = document.getElementById("ml-sub-3");
let scrollEle4 = document.getElementById("ml-sub-4");
let scrollEle5 = document.getElementById("ml-sub-5");
let scrollEle6 = document.getElementById("ml-sub-6");
let scrollEle7 = document.getElementById("ml-sub-7");
let scrollEle8 = document.getElementById("ml-sub-8");
let scrollEle9 = document.getElementById("ml-sub-9");
let ele4 = document.getElementById("sm-1");
let ele5 = document.getElementById("sm-2");
let ele6 = document.getElementById("sm-3");
let ele7 = document.getElementById("sm-4");
let ele8 = document.getElementById("sm-5");
let ele9 = document.getElementById("sm-6");
let ele10 = document.getElementById("sm-7");
let ele11 = document.getElementById("sm-8");
let ele12 = document.getElementById("sm-9");
let timeInt = 1, timeInt2 = 1, timeInt3 = 1, timeInt4 = 1, timeInt5 = 1, timeInt6 = 1;
let annimate1 = false, annimate2 = false, annimate3 = false, annimate4 = false, annimate5 = false, annimate6 = false;
let animate1Fn = null, animate2Fn = null, animate3Fn = null, animate4Fn = null, animate5Fn = null, animate6Fn = null;
//onclick annimations
ele4.addEventListener('click', () => {
    clearInterval(animate4Fn);
    ele5.classList.remove("mordern-border-trans");
    ele6.classList.remove("mordern-border-trans");
    ele4.classList.add("mordern-border-trans");
    SMMoveCarouselTo(0);
    timeInt = 1;
    financeMgt();
})
ele5.addEventListener('click', () => {
    clearInterval(animate4Fn);
    ele4.classList.remove("mordern-border-trans");
    ele6.classList.remove("mordern-border-trans");
    ele5.classList.add("mordern-border-trans");
    SMMoveCarouselTo(1);
    timeInt = 2;
    financeMgt();
})
ele6.addEventListener('click', () => {
    clearInterval(animate4Fn);
    ele4.classList.remove("mordern-border-trans");
    ele5.classList.remove("mordern-border-trans");
    ele6.classList.add("mordern-border-trans");
    SMMoveCarouselTo(2);
    timeInt = 0;
    financeMgt();
})
//Finance Management Annimation
const financeMgt = () => {
    animate4Fn = setInterval(() => {
        if (timeInt === 0) {
            ele5.classList.remove("mordern-border-trans");
            ele6.classList.remove("mordern-border-trans");
            ele4.classList.add("mordern-border-trans");
            SMMoveCarouselTo(0);
        }
        else if (timeInt === 1) {
            ele4.classList.remove("mordern-border-trans");
            ele6.classList.remove("mordern-border-trans");
            ele5.classList.add("mordern-border-trans");
            SMMoveCarouselTo(1);
        }
        else {
            ele4.classList.remove("mordern-border-trans");
            ele5.classList.remove("mordern-border-trans");
            ele6.classList.add("mordern-border-trans");
            SMMoveCarouselTo(2);
        }
        timeInt++;
        timeInt = timeInt > 2 ? 0 : timeInt;
    }, 4000);
}
ele7.addEventListener('click', () => {
    clearInterval(animate5Fn);
    ele8.classList.remove("mordern-border-trans-2");
    ele9.classList.remove("mordern-border-trans-2");
    ele7.classList.add("mordern-border-trans-2");
    SM2MoveCarouselTo(0);
    timeInt2 = 1;
    studentInfo();
})
ele8.addEventListener('click', () => {
    clearInterval(animate5Fn);
    ele7.classList.remove("mordern-border-trans-2");
    ele9.classList.remove("mordern-border-trans-2");
    ele8.classList.add("mordern-border-trans-2");
    SM2MoveCarouselTo(1);
    timeInt2 = 2;
    studentInfo();
})
ele9.addEventListener('click', () => {
    clearInterval(animate5Fn);
    ele7.classList.remove("mordern-border-trans-2");
    ele8.classList.remove("mordern-border-trans-2");
    ele9.classList.add("mordern-border-trans-2");
    SM2MoveCarouselTo(2);
    timeInt2 = 0;
    studentInfo();
})
//Finance Management Annimation
const studentInfo = () => {
    animate5Fn = setInterval(() => {
        if (timeInt2 === 0) {
            ele8.classList.remove("mordern-border-trans-2");
            ele9.classList.remove("mordern-border-trans-2");
            ele7.classList.add("mordern-border-trans-2");
            SM2MoveCarouselTo(0);
        }
        else if (timeInt2 === 1) {
            ele7.classList.remove("mordern-border-trans-2");
            ele9.classList.remove("mordern-border-trans-2");
            ele8.classList.add("mordern-border-trans-2");
            SM2MoveCarouselTo(1);
        }
        else {
            ele7.classList.remove("mordern-border-trans-2");
            ele8.classList.remove("mordern-border-trans-2");
            ele9.classList.add("mordern-border-trans-2");
            SM2MoveCarouselTo(2);
        }
        timeInt2++;
        timeInt2 = timeInt2 > 2 ? 0 : timeInt2;
    }, 4000);
}
ele10.addEventListener('click', () => {
    clearInterval(animate6Fn);
    ele11.classList.remove("mordern-border-trans-1");
    ele12.classList.remove("mordern-border-trans-1");
    ele10.classList.add("mordern-border-trans-1");
    SM3MoveCarouselTo(0);
    timeInt3 = 1;
    admissionMgt();
})
ele11.addEventListener('click', () => {
    clearInterval(animate6Fn);
    ele10.classList.remove("mordern-border-trans-1");
    ele12.classList.remove("mordern-border-trans-1");
    ele11.classList.add("mordern-border-trans-1");
    SM3MoveCarouselTo(1);
    timeInt3 = 2;
    admissionMgt();
})
ele12.addEventListener('click', () => {
    clearInterval(animate6Fn);
    ele10.classList.remove("mordern-border-trans-1");
    ele11.classList.remove("mordern-border-trans-1");
    ele12.classList.add("mordern-border-trans-1");
    SM3MoveCarouselTo(2);
    timeInt3 = 0;
    admissionMgt();
})
//Finance Management Annimation
const admissionMgt = () => {
    animate6Fn = setInterval(() => {
        if (timeInt3 === 0) {
            ele11.classList.remove("mordern-border-trans-1");
            ele12.classList.remove("mordern-border-trans-1");
            ele10.classList.add("mordern-border-trans-1");
            SM3MoveCarouselTo(0);
        }
        else if (timeInt3 === 1) {
            ele10.classList.remove("mordern-border-trans-1");
            ele12.classList.remove("mordern-border-trans-1");
            ele11.classList.add("mordern-border-trans-1");
            SM3MoveCarouselTo(1);
        }
        else {
            ele10.classList.remove("mordern-border-trans-1");
            ele11.classList.remove("mordern-border-trans-1");
            ele12.classList.add("mordern-border-trans-1");
            SM3MoveCarouselTo(2);
        }
        timeInt3++;
        timeInt3 = timeInt3 > 2 ? 0 : timeInt3;
    }, 4000);
}
scrollEle1.addEventListener('click', () => {
    clearInterval(animate1Fn);
    scrollEle2.classList.remove("mordern-border-trans");
    scrollEle3.classList.remove("mordern-border-trans");
    scrollEle1.classList.add("mordern-border-trans");
    ML1MoveCarouselTo(0)
    timeInt4 = 1;
    learningMgt();
})
scrollEle2.addEventListener('click', () => {
    clearInterval(animate1Fn);
    scrollEle1.classList.remove("mordern-border-trans");
    scrollEle3.classList.remove("mordern-border-trans");
    scrollEle2.classList.add("mordern-border-trans");
    MLMoveCarouselTo(1)
    timeInt4 = 2;
    learningMgt();
})
scrollEle3.addEventListener('click', () => {
    clearInterval(animate1Fn);
    scrollEle1.classList.remove("mordern-border-trans");
    scrollEle2.classList.remove("mordern-border-trans");
    scrollEle3.classList.add("mordern-border-trans");
    MLMoveCarouselTo(2)
    timeInt4 = 0;
    learningMgt();
})
//Finance Management Annimation
const learningMgt = () => {
    animate1Fn = setInterval(() => {
        if (timeInt4 === 0) {
            scrollEle2.classList.remove("mordern-border-trans");
            scrollEle3.classList.remove("mordern-border-trans");
            scrollEle1.classList.add("mordern-border-trans");
            ML1MoveCarouselTo(0)
        }
        else if (timeInt4 === 1) {
            scrollEle1.classList.remove("mordern-border-trans");
            scrollEle3.classList.remove("mordern-border-trans");
            scrollEle2.classList.add("mordern-border-trans");
            MLMoveCarouselTo(1)
        }
        else {
            scrollEle1.classList.remove("mordern-border-trans");
            scrollEle2.classList.remove("mordern-border-trans");
            scrollEle3.classList.add("mordern-border-trans");
            MLMoveCarouselTo(2)
        }
        timeInt4++;
        timeInt4 = timeInt4 > 2 ? 0 : timeInt4;
    }, 4000);
}
scrollEle4?.addEventListener('click', () => {
    clearInterval(animate2Fn);
    scrollEle5.classList.remove("mordern-border-trans-1");
    scrollEle6.classList.remove("mordern-border-trans-1");
    scrollEle4.classList.add("mordern-border-trans-1");
    MLMoveCarouselTo(0)
    timeInt5 = 1;
    digitalContent();
})
scrollEle5?.addEventListener('click', () => {
    clearInterval(animate2Fn);
    scrollEle4.classList.remove("mordern-border-trans-1");
    scrollEle6.classList.remove("mordern-border-trans-1");
    scrollEle5.classList.add("mordern-border-trans-1");
    ML1MoveCarouselTo(1)
    timeInt5 = 2;
    digitalContent();
})
scrollEle6?.addEventListener('click', () => {
    clearInterval(animate2Fn);
    scrollEle4.classList.remove("mordern-border-trans-1");
    scrollEle5.classList.remove("mordern-border-trans-1");
    scrollEle6.classList.add("mordern-border-trans-1");
    ML1MoveCarouselTo(2)
    timeInt5 = 0;
    digitalContent();
})
//Finance Management Annimation
const digitalContent = () => {
    animate2Fn = setInterval(() => {
        if (timeInt5 === 0) {
            scrollEle5.classList.remove("mordern-border-trans-1");
            scrollEle6.classList.remove("mordern-border-trans-1");
            scrollEle4.classList.add("mordern-border-trans-1");
            MLMoveCarouselTo(0)
        }
        else if (timeInt5 === 1) {
            scrollEle4.classList.remove("mordern-border-trans-1");
            scrollEle6.classList.remove("mordern-border-trans-1");
            scrollEle5.classList.add("mordern-border-trans-1");
            ML1MoveCarouselTo(1)
        }
        else {
            scrollEle4.classList.remove("mordern-border-trans-1");
            scrollEle5.classList.remove("mordern-border-trans-1");
            scrollEle6.classList.add("mordern-border-trans-1");
            ML1MoveCarouselTo(2)
        }
        timeInt5++;
        timeInt5 = timeInt5 > 2 ? 0 : timeInt5;
    }, 4000);
}
scrollEle7.addEventListener('click', () => {
    clearInterval(animate3Fn);
    scrollEle8.classList.remove("mordern-border-trans-2");
    scrollEle9.classList.remove("mordern-border-trans-2");
    scrollEle7.classList.add("mordern-border-trans-2");
    ML2MoveCarouselTo(0)
    timeInt6 = 1;
    assessments();
})
scrollEle8.addEventListener('click', () => {
    clearInterval(animate3Fn);
    scrollEle7.classList.remove("mordern-border-trans-2");
    scrollEle9.classList.remove("mordern-border-trans-2");
    scrollEle8.classList.add("mordern-border-trans-2");
    ML2MoveCarouselTo(1)
    timeInt6 = 2;
    assessments();
})
scrollEle9.addEventListener('click', () => {
    clearInterval(animate3Fn);
    scrollEle7.classList.remove("mordern-border-trans-2");
    scrollEle8.classList.remove("mordern-border-trans-2");
    scrollEle9.classList.add("mordern-border-trans-2");
    ML2MoveCarouselTo(2)
    timeInt6 = 0;
    assessments();
})
//Finance Management Annimation
const assessments = () => {
    animate3Fn = setInterval(() => {
        if (timeInt6 === 0) {
            scrollEle8.classList.remove("mordern-border-trans-2");
            scrollEle9.classList.remove("mordern-border-trans-2");
            scrollEle7.classList.add("mordern-border-trans-2");
            ML2MoveCarouselTo(0)
        }
        else if (timeInt6 === 1) {
            scrollEle7.classList.remove("mordern-border-trans-2");
            scrollEle9.classList.remove("mordern-border-trans-2");
            scrollEle8.classList.add("mordern-border-trans-2");
            ML2MoveCarouselTo(1)
        }
        else {
            scrollEle7.classList.remove("mordern-border-trans-2");
            scrollEle8.classList.remove("mordern-border-trans-2");
            scrollEle9.classList.add("mordern-border-trans-2");
            ML2MoveCarouselTo(2)
        }
        timeInt6++;
        timeInt6 = timeInt6 > 2 ? 0 : timeInt6;
    }, 4000);
}
window.addEventListener(
    "scroll",
    () => {
        let ele = document.getElementById("ml-sec-1");
        let ele1 = document.getElementById("ml-sec-2");
        let ele2 = document.getElementById("ml-sec-3");
        let h4 = document.getElementById("ft-id-1").getBoundingClientRect().top;
        let h5 = document.getElementById("ft-id-2").getBoundingClientRect().top;
        let h6 = document.getElementById("ft-id-3").getBoundingClientRect().top;
        let h1 = ele?.getBoundingClientRect().top;
        let h2 = ele1?.getBoundingClientRect().top;
        let h3 = ele2?.getBoundingClientRect().top;
        if (!annimate1 && h1 < 400) {
            annimate1 = true;
            scrollEle1.classList.add("mordern-border-trans");
            learningMgt();
        }
        if (!annimate2 && h2 < 400) {
            annimate2 = true;
            scrollEle4.classList.add("mordern-border-trans-1");
            digitalContent();
        }
        if (!annimate3 && h3 < 400) {
            annimate3 = true;
            scrollEle7.classList.add("mordern-border-trans-2");
            assessments();
        }
        if (!annimate4 && h4 < 400) {
            annimate4 = true;
            ele4.classList.add("mordern-border-trans");
            financeMgt();
        }
        if (!annimate5 && h5 < 400) {
            annimate5 = true;
            ele7.classList.add("mordern-border-trans-2");
            studentInfo();
        }
        if (!annimate6 && h6 < 400) {
            annimate6 = true;
            ele10.classList.add("mordern-border-trans-1");
            admissionMgt();
        }
    },
    { passive: true }
);



