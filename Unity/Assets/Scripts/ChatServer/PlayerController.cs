using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [Header("Mpvement Settings")]
    [SerializeField] private float moveSpeed = 5;
    [SerializeField] private float rotSpeed = 100f;

    // Update is called once per frame
    void Update()
    {
        float h = Input.GetAxisRaw("Horizontal");
        float v = Input.GetAxisRaw("Vertical");

            Vector3 dir = transform.forward * v;
        transform.position += dir * moveSpeed * Time.deltaTime;

        transform.Rotate(Vector3.up * h * rotSpeed * Time.deltaTime);
    }
}
