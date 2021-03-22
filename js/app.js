var bad_answer = 0;
var you_win = 0;
var ismap = false;

var activity = {

  // Resume //---------------------------------------------------------------
  resume : function() {
    ismap = false;
    $('#activity').load('./htmls/resume.html');
  },

 
  // Cover //-------------------------------------------------------------------
  cover : function() {
    ismap = false;
    bad_answer = 0;
    you_win = 0;
    $('#activity').load('./htmls/cover.html');
  },

  // Escenario //-------------------------------------------------------------------
  escenario1 : function() {
    ismap = false;
    bad_answer = 0;
    you_win = 0;
    $('#activity').load('./htmls/escenario1.html');
  },
  escenario1_A_bien : function() {
    ismap = false;
    $('#activity').load('./htmls/escenario1-A-bien.html');
  },
  escenario1_A_mal : function() {
    ismap = false;
    $('#activity').load('./htmls/escenario1-A-mal.html');
  },

  escenario2 : function() {
    ismap = false;
    bad_answer = 0;
    you_win = 0;
    $('#activity').load('./htmls/escenario2-A.html');
  },
    escenario2_A_bien : function() {
    ismap = false;
    $('#activity').load('./htmls/escenario2-A-bien.html');
  },
  escenario2_A_mal : function() {
    ismap = false;
    $('#activity').load('./htmls/escenario2-A-mal.html');
  },
  escenario2_B : function() {
    ismap = false;
    bad_answer = 0;
    you_win = 0;
    $('#activity').load('./htmls/escenario2-B.html');
  },
  escenario2_B_bien : function() {
    ismap = false;
    $('#activity').load('./htmls/escenario2-B-bien.html');
  },
  escenario2_B_mal : function() {
    ismap = false;
    $('#activity').load('./htmls/escenario2-B-mal.html');
  },

  escenario3 : function() {
    ismap = false;
    bad_answer = 0;
    you_win = 0;
    $('#activity').load('./htmls/escenario3-A.html');
  },
  escenario3_A_bien : function() {
    ismap = false;
    $('#activity').load('./htmls/escenario3-A-bien.html');
  },
  escenario3_A_mal : function() {
    ismap = false;
    $('#activity').load('./htmls/escenario3-A-mal.html');
  },
  escenario3_B : function() {
    ismap = false;
    bad_answer = 0;
    you_win = 0;
    $('#activity').load('./htmls/escenario3-B.html');
  },
  escenario3_B_bien : function() {
    ismap = false;
    $('#activity').load('./htmls/escenario3-B-bien.html');
  },
  escenario3_B_mal : function() {
    ismap = false;
    $('#activity').load('./htmls/escenario3-B-mal.html');
  },
  escenario3_C : function() {
    ismap = false;
    bad_answer = 0;
    you_win = 0;
    $('#activity').load('./htmls/escenario3-C.html');
  },
  escenario3_C_bien : function() {
    ismap = false;
    $('#activity').load('./htmls/escenario3-C-bien.html');
  },
  escenario3_C_mal : function() {
    ismap = false;
    $('#activity').load('./htmls/escenario3-C-mal.html');
  },

   //  Game over //--------------------------------------------------------------
  game_over: function() {
    ismap = false;
    $('#activity').load('./htmls/game-over.html');
  },
}