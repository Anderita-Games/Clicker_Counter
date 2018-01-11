#pragma strict
var CurrentScore : UnityEngine.UI.Text;
var HighScore : UnityEngine.UI.Text;


function Start () {
	PlayerPrefs.SetInt("CurrentScore", 0);
}

function Update () {
	if (Input.GetMouseButtonDown(0)) {
		PlayerPrefs.SetInt("CurrentScore", PlayerPrefs.GetInt("CurrentScore") + 1);
	}
	if (PlayerPrefs.GetInt("CurrentScore") > PlayerPrefs.GetInt("HighScore")) {
		PlayerPrefs.SetInt("HighScore", PlayerPrefs.GetInt("CurrentScore"));
	}
	CurrentScore.text = PlayerPrefs.GetInt("CurrentScore").ToString();
	HighScore.text = "HighScore: " + PlayerPrefs.GetInt("HighScore").ToString();
}