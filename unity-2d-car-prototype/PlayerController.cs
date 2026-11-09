using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float forwardSpeed = 5f;
    public float laneChangeSpeed = 10f;
    public float[] lanes = new float[] { -2f, 0f, 2f };

    private int currentLane = 1;
    private Vector3 targetPosition;

    private void Start()
    {
        targetPosition = transform.position;
    }

    private void Update()
    {
        if (GameManager.Instance != null && GameManager.Instance.IsGameOver)
            return;

        HandleInput();
        MoveTowardTarget();
        transform.Translate(Vector3.up * forwardSpeed * Time.deltaTime, Space.World);
    }

    private void HandleInput()
    {
        if (Input.GetKeyDown(KeyCode.LeftArrow))
        {
            ChangeLane(-1);
        }
        else if (Input.GetKeyDown(KeyCode.RightArrow))
        {
            ChangeLane(1);
        }

        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);
            if (touch.phase == TouchPhase.Began)
            {
                float screenThird = Screen.width / 3f;
                if (touch.position.x < screenThird)
                    ChangeLane(-1);
                else if (touch.position.x > screenThird * 2f)
                    ChangeLane(1);
            }
        }
    }

    private void ChangeLane(int direction)
    {
        currentLane = Mathf.Clamp(currentLane + direction, 0, lanes.Length - 1);
        targetPosition = new Vector3(lanes[currentLane], transform.position.y, transform.position.z);
    }

    private void MoveTowardTarget()
    {
        targetPosition.y = transform.position.y;
        transform.position = Vector3.Lerp(transform.position, targetPosition, Time.deltaTime * laneChangeSpeed);
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Traffic") && GameManager.Instance != null)
        {
            GameManager.Instance.SetGameOver();
        }
    }
}
