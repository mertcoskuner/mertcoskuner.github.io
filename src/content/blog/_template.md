---
title: "Post title"
description: "One sentence shown in the post list and in link previews."
date: 2026-10-18
tags: ["federated learning"]
lang: en
draft: true
---

Copy this file to `src/content/blog/<post-name>.md`; the file name becomes the URL
(`/blog/<post-name>`). Files that start with `_` are never published. Set `lang: tr`
for a post in Turkish and `draft: false` when it is ready.

## A section

Plain Markdown: **bold**, *italic*, [links](https://mertcoskuner.github.io), lists,
tables and footnotes.[^1]

> A quotation.

Inline math such as $\nabla_\theta \mathcal{L}(\theta)$, and display math:

$$
\theta_{t+1} = \theta_t - \eta \, \frac{1}{|S_t|} \sum_{i \in S_t} \nabla \ell_i(\theta_t)
$$

```python
import torch

loss = torch.nn.functional.cross_entropy(model(x), y)
loss.backward()
```

Images go next to the post, for example `src/content/blog/images/figure.png`, and are
included with `![Alt text](./images/figure.png)`.

[^1]: A footnote.
