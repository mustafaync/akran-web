using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    public Text moneyText;
    public Text gameOverText;

    private int money;
    private bool gameOver;

    private void Awake()
    {
        if (Instance == null)
            Instance = this;
        else
            Destroy(gameObject);

        if (gameOverText != null)
            gameOverText.gameObject.SetActive(false);

        UpdateMoneyText();
    }

    public bool IsGameOver => gameOver;

    public void AddMoney(int amount)
    {
        if (gameOver)
            return;

        money += amount;
        UpdateMoneyText();
    }

    public void SetGameOver()
    {
        if (gameOver)
            return;

        gameOver = true;
        if (gameOverText != null)
            gameOverText.gameObject.SetActive(true);
    }

    private void UpdateMoneyText()
    {
        if (moneyText != null)
            moneyText.text = "MONEY: " + money;
    }
}
