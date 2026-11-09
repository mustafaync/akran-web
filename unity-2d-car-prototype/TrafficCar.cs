using UnityEngine;

public class TrafficCar : MonoBehaviour
{
    public float speed = 6f;
    private bool scored;
    private Transform player;

    private void Start()
    {
        GameObject playerObject = GameObject.FindGameObjectWithTag("Player");
        if (playerObject != null)
            player = playerObject.transform;
    }

    private void Update()
    {
        if (GameManager.Instance != null && GameManager.Instance.IsGameOver)
            return;

        transform.Translate(Vector3.down * speed * Time.deltaTime, Space.World);

        if (!scored && player != null && transform.position.y < player.position.y)
        {
            scored = true;
            if (GameManager.Instance != null)
                GameManager.Instance.AddMoney(25);
        }

        if (player != null && transform.position.y < player.position.y - 12f)
        {
            Destroy(gameObject);
        }
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Player") && GameManager.Instance != null)
        {
            GameManager.Instance.SetGameOver();
        }
    }
}
