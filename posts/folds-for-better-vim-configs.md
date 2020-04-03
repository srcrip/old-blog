---
slug: fold-your-vim-config
title: Fold your vim config
date: 2020-04-02
author: sevensidedmarble
keywords: vim, neovim
description: How to use fold markers to organize your vim config.
published: true
---

import FigImage from '~/components/FigImage.vue'

You may or may not know that I am pretty into Emacs and Org mode. Org mode, if you haven't seen it, it's an outliner built into Emacs:

<FigImage src="/images/org-mode.png" caption="Org mode is great for writing structured content like scripts." />

Some people even use Org mode as a [literate programming](https://wiki.c2.com/?LiterateProgramming) <label for="sn-demo" class="margin-toggle sidenote-number"></label><input type="checkbox" id="sn-demo" class="margin-toggle"/><span class="sidenote">Conceived by the famous Donald Knuth, which is interesting.</span> tool for their Emacs config. I've always thought this was pretty cool, and thought literate programming in general was pretty cool, but never found a great way to apply it to my vim config until now.

# The inspiration

Before continuing I'd like to lead with where I found this idea online:
- https://vi.stackexchange.com/questions/3814/is-there-a-best-practice-to-fold-a-vimrc-file
- https://jdhao.github.io/2019/08/16/nvim_config_folding/

I'm not sure which of these I saw first, but the basic concept is using manually placed fold markers in your vim config to break it down into sections. Kind of like this:

### Before...

<FigImage src="/images/before-folding.png" caption="Please forgive my messy config." />

### After!

<FigImage src="/images/after-folding.png" caption="This is what it looks like with one of the folded sections opened." />

Some people even take this a step farther and apply some crazy fold styling to make it look even more like Org mode, which you can see in one of the links above.

# Here's what you need

`fold-marker` is a folding method few people I'd imagine spend much time thinking about. The markers themselves look like this:

{% highlight vim %}
```
"" Autocomplete {{{
Plug 'Shougo/neco-vim'
Plug 'neoclide/coc-neco'
Plug 'neoclide/coc-sources'
Plug 'neoclide/coc.nvim', {'branch': 'release'}
"" }}}

"" The almighty tpope {{{
Plug 'tpope/vim-sensible'
Plug 'tpope/vim-endwise'
Plug 'tpope/vim-repeat'
Plug 'tpope/vim-eunuch'
Plug 'tpope/vim-rhubarb'
Plug 'tpope/vim-rsi'
Plug 'tpope/vim-unimpaired'
" }}}

"" Spellcheck {{{
autocmd BufRead,BufNewFile *.md setlocal spell spelllang=en_us
autocmd FileType gitcommit setlocal spell spelllang=en_us
"" }}}
```
{% endhighlight %}

Which when folded look something like this:

```
+--  7 lines: " Autocomplete

+-- 18 lines: " The almighty tpope

+--  5 lines: " Spellcheck
```

I've found this is an amazing way of breaking up your vim config into sections without relying on splitting it into different files (which I was doing before, and wasn't ever completely satisfied with).

# But wait, there's more

There's only one problem though, you probably don't want to set `foldmethod` to `fold-marker` for everything. I personally think `syntax` or `indent` is the most useful general-purpose `foldmethod`, so that is what I set mine to in my vim config. So how you change `foldmethod` only for `.vim` files?

Well, there is of course a few ways to do it, but the best is to use `ftplugin`.

In your vim config directories `after/ftplugin` directory (I use neovim, so for me this is at `~/.config/nvim/after/ftplugin/vim/vim.vim`) add the following file to the following directory:

```
"" ~/.config/nvim/after/ftplugin/vim/vim.vim
set foldmethod=marker
```

### Breaking this down

1. The `after` directory is where `ftplugin` files can run *after* vim default configurations have loaded.
2. The `ftplugin` directory then contains a bunch of subdirectories for each file type.
3. Then the `vim` directory contains files that will run only when editing `.vim` files, after other config files have fully loaded.
4. Then the file itself is just setting foldmethod to marker. Settings put here are filetype specific, so they won't bleed into other filetypes.

Well, that's about it. I hope you find this somewhat as cool as I do!
