# Speedcode API Docs

**Docs are organized by Endpoint**

## /algorithms

> GET

Returns all algorithms available for a specific programming language

#### Input Params

```
'lang=java&grouped=false(default)'
```

```
{
    'Sorting': [
        {
            'id': 'id',
            'name': 'Bubble Sort',
            'type': 'Algorithm',
            'category': 'Sorting',
            'description': 'Iterative Sorting Algorithm',
            'difficulty': 3 (int),
            'attempts:' 5 (int)
        },
        ....
    ],
    'Graphs': [
        {
            'id': 'id',
            'name': 'Depth First Traversal',
            'type': 'Algorithm',
            'category': 'Graphs',
            'description': 'Recursive Traversal Algorithm',
            'difficulty': 3 (int),
            'attempts:' 5 (int)
        },
        ...
    ],
    'Trees': [
        {
            'id': 'id',
            'name': 'In-order traversal',
            'type': 'Algorithm',
            'category': 'Trees',
            'description': 'Recursive Traversal Algorithm',
            'difficulty': 2 (int),
            'attempts:' 0 (int)
        },
        ...
    ],
}
```
