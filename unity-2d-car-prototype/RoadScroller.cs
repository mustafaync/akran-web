using UnityEngine;

public class RoadScroller : MonoBehaviour
{
    public Transform[] roadPieces;
    public float scrollSpeed = 6f;
    private float pieceHeight;

    private void Start()
    {
        if (roadPieces != null && roadPieces.Length > 0)
        {
            SpriteRenderer renderer = roadPieces[0].GetComponent<SpriteRenderer>();
            if (renderer != null)
                pieceHeight = renderer.bounds.size.y;
        }
    }

    private void Update()
    {
        if (GameManager.Instance != null && GameManager.Instance.IsGameOver)
            return;

        if (roadPieces == null)
            return;

        for (int i = 0; i < roadPieces.Length; i++)
        {
            if (roadPieces[i] == null)
                continue;

            roadPieces[i].Translate(Vector3.down * scrollSpeed * Time.deltaTime, Space.World);

            if (pieceHeight > 0 && roadPieces[i].position.y <= -pieceHeight)
            {
                roadPieces[i].position += Vector3.up * pieceHeight * roadPieces.Length;
            }
        }
    }
}
