using System.Collections;
using UnityEngine;

public class TrafficSpawner : MonoBehaviour
{
    public GameObject[] trafficPrefabs;
    public Transform player;
    public float spawnDistance = 18f;
    public float spawnRate = 0.9f;
    public float[] lanes = new float[] { -2f, 0f, 2f };

    private void Start()
    {
        StartCoroutine(SpawnRoutine());
    }

    private IEnumerator SpawnRoutine()
    {
        while (GameManager.Instance == null || !GameManager.Instance.IsGameOver)
        {
            SpawnCar();
            yield return new WaitForSeconds(spawnRate);
        }
    }

    private void SpawnCar()
    {
        if (trafficPrefabs == null || trafficPrefabs.Length == 0 || player == null)
            return;

        int laneIndex = Random.Range(0, lanes.Length);
        Vector3 spawnPosition = new Vector3(lanes[laneIndex], player.position.y + spawnDistance, 0f);
        GameObject prefab = trafficPrefabs[Random.Range(0, trafficPrefabs.Length)];
        Instantiate(prefab, spawnPosition, Quaternion.identity);
    }
}
